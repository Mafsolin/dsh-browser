export interface ModelSelection {
  provider: string
  model: string
  reasoningEffort?: string
}

export interface ReasoningEffort {
  id: string
  name: string
  description?: string
}

export interface ModelReasoning {
  efforts: ReasoningEffort[]
  defaultEffort?: string
}

export interface CatalogModel {
  id: string
  name: string
  description?: string
  reasoning?: ModelReasoning
}

export interface ModelProviderGroup {
  id: string
  name: string
  models: CatalogModel[]
}

export interface ModelCatalogFailure {
  id: string
  name: string
  message: string
}

export interface SessionModels {
  current: ModelSelection
  routable: boolean
  groups: ModelProviderGroup[]
  failures: ModelCatalogFailure[]
}

export interface ContextPressure {
  pressureTokens?: number
  projectedTokens?: number
  contextWindow?: number
}

export interface ContextOccupancy {
  usedTokens: number
  contextWindow: number
  percent: number
}

function record(value: unknown): Record<string, unknown> | null {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : null
}

function nonEmptyString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() !== '' ? value : undefined
}

function positiveInteger(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isSafeInteger(value) && value > 0 ? value : undefined
}

function nonNegativeInteger(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0 ? value : undefined
}

export function parseModelSelection(value: unknown): ModelSelection | null {
  const item = record(value)
  if (item === null) return null
  const provider = nonEmptyString(item.provider)
  const model = nonEmptyString(item.model)
  if (provider === undefined || model === undefined) return null
  const reasoningEffort = nonEmptyString(item.reasoningEffort)
  return { provider, model, ...(reasoningEffort === undefined ? {} : { reasoningEffort }) }
}

function parseReasoning(value: unknown): ModelReasoning | undefined {
  const item = record(value)
  if (item === null || !Array.isArray(item.efforts)) return undefined
  const efforts = item.efforts.flatMap((candidate): ReasoningEffort[] => {
    const row = record(candidate)
    if (row === null) return []
    const id = nonEmptyString(row.id)
    const name = nonEmptyString(row.name)
    if (id === undefined || name === undefined) return []
    const description = nonEmptyString(row.description)
    return [{ id, name, ...(description === undefined ? {} : { description }) }]
  })
  if (efforts.length === 0) return undefined
  const defaultEffort = nonEmptyString(item.defaultEffort)
  return { efforts, ...(defaultEffort === undefined ? {} : { defaultEffort }) }
}

export function parseSessionModels(value: unknown): SessionModels | null {
  const root = record(value)
  if (root === null || !Array.isArray(root.groups) || !Array.isArray(root.failures)) return null
  const current = parseModelSelection(root.current)
  if (current === null || typeof root.routable !== 'boolean') return null
  const groups = root.groups.flatMap((candidate): ModelProviderGroup[] => {
    const group = record(candidate)
    if (group === null || !Array.isArray(group.models)) return []
    const id = nonEmptyString(group.id)
    const name = nonEmptyString(group.name)
    if (id === undefined || name === undefined) return []
    const models = group.models.flatMap((modelCandidate): CatalogModel[] => {
      const model = record(modelCandidate)
      if (model === null) return []
      const modelId = nonEmptyString(model.id)
      const modelName = nonEmptyString(model.name)
      if (modelId === undefined || modelName === undefined) return []
      const description = nonEmptyString(model.description)
      const reasoning = parseReasoning(model.reasoning)
      return [{
        id: modelId,
        name: modelName,
        ...(description === undefined ? {} : { description }),
        ...(reasoning === undefined ? {} : { reasoning }),
      }]
    })
    return [{ id, name, models }]
  })
  const failures = root.failures.flatMap((candidate): ModelCatalogFailure[] => {
    const failure = record(candidate)
    if (failure === null) return []
    const id = nonEmptyString(failure.id)
    const name = nonEmptyString(failure.name)
    const message = nonEmptyString(failure.message)
    return id === undefined || name === undefined || message === undefined ? [] : [{ id, name, message }]
  })
  return { current, routable: root.routable, groups, failures }
}

export function selectedCatalogModel(catalog: SessionModels | null): CatalogModel | null {
  if (catalog === null) return null
  return catalog.groups.find((group) => group.id === catalog.current.provider)
    ?.models.find((model) => model.id === catalog.current.model) ?? null
}

export function effectiveReasoningEffort(catalog: SessionModels | null): string | undefined {
  const model = selectedCatalogModel(catalog)
  return catalog?.current.reasoningEffort ?? model?.reasoning?.defaultEffort
}

export function parseContextPressure(value: unknown): ContextPressure | null {
  const item = record(value)
  if (item === null) return null
  const pressureTokens = nonNegativeInteger(item.pressureTokens)
  const projectedTokens = nonNegativeInteger(item.projectedTokens)
  const contextWindow = positiveInteger(item.contextWindow)
  if (pressureTokens === undefined && projectedTokens === undefined && contextWindow === undefined) return null
  return {
    ...(pressureTokens === undefined ? {} : { pressureTokens }),
    ...(projectedTokens === undefined ? {} : { projectedTokens }),
    ...(contextWindow === undefined ? {} : { contextWindow }),
  }
}

export function contextOccupancy(pressure: ContextPressure | null): ContextOccupancy | null {
  if (pressure?.contextWindow === undefined) return null
  const usedTokens = pressure.projectedTokens ?? pressure.pressureTokens
  if (usedTokens === undefined) return null
  return {
    usedTokens,
    contextWindow: pressure.contextWindow,
    percent: Math.min(100, Math.round(usedTokens / pressure.contextWindow * 100)),
  }
}

export function formatTokens(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1).replace(/\.0$/, '')}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(value >= 100_000 ? 0 : 1).replace(/\.0$/, '')}K`
  return String(value)
}
