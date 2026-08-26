import { describe, expect, it } from 'vitest'
import {
  contextOccupancy,
  effectiveReasoningEffort,
  formatTokens,
  parseContextPressure,
  parseSessionModels,
  selectedCatalogModel,
} from '../src/panel/model-controls.ts'

const CATALOG = {
  current: { provider: 'mafsolin', model: 'cx/gpt-5.6-sol', reasoningEffort: 'high' },
  routable: true,
  groups: [{
    id: 'mafsolin',
    name: 'Mafsolin',
    models: [{
      id: 'cx/gpt-5.6-sol',
      name: 'GPT 5.6 Sol',
      description: 'Primary model',
      reasoning: {
        efforts: [
          { id: 'low', name: 'Low' },
          { id: 'high', name: 'High', description: 'More reasoning' },
        ],
        defaultEffort: 'low',
      },
    }],
  }],
  failures: [],
}

describe('panel model controls', () => {
  it('parses the session model directory and current effort', () => {
    const parsed = parseSessionModels(CATALOG)
    expect(parsed).not.toBeNull()
    expect(parsed?.current).toEqual({
      provider: 'mafsolin',
      model: 'cx/gpt-5.6-sol',
      reasoningEffort: 'high',
    })
    expect(selectedCatalogModel(parsed)?.name).toBe('GPT 5.6 Sol')
    expect(effectiveReasoningEffort(parsed)).toBe('high')
  })

  it('falls back to the model default effort when selection omits it', () => {
    const parsed = parseSessionModels({
      ...CATALOG,
      current: { provider: 'mafsolin', model: 'cx/gpt-5.6-sol' },
    })
    expect(effectiveReasoningEffort(parsed)).toBe('low')
  })

  it('rejects malformed model directories instead of guessing', () => {
    expect(parseSessionModels(null)).toBeNull()
    expect(parseSessionModels({ current: {}, routable: true, groups: [], failures: [] })).toBeNull()
    expect(parseSessionModels({ ...CATALOG, routable: 'yes' })).toBeNull()
  })

  it('uses projected context first and clamps the ring percentage', () => {
    const pressure = parseContextPressure({
      pressureTokens: 10_000,
      projectedTokens: 125_000,
      contextWindow: 100_000,
    })
    expect(contextOccupancy(pressure)).toEqual({
      usedTokens: 125_000,
      contextWindow: 100_000,
      percent: 100,
    })
  })

  it('falls back to request pressure and formats token capacities', () => {
    expect(contextOccupancy(parseContextPressure({ pressureTokens: 35_000, contextWindow: 350_000 })))
      .toEqual({ usedTokens: 35_000, contextWindow: 350_000, percent: 10 })
    expect(formatTokens(999)).toBe('999')
    expect(formatTokens(1_200)).toBe('1.2K')
    expect(formatTokens(350_000)).toBe('350K')
    expect(formatTokens(1_050_000)).toBe('1.1M')
  })
})
