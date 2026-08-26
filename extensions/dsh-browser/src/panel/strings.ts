import type { BridgeState } from '../background/bridge.ts'
import type { UiLocale } from '../i18n.ts'

export interface PanelCopy {
  documentTitle: string
  status: Record<BridgeState, string>
  approval: {
    eyebrow: string
    readTitle: string
    actionTitle: string
    request: string
    origins: string
    unknownOrigin: string
    deny: string
    allowOnce: string
    alwaysAllowReads: string
    trustSession: string
    readFootnote: string
    actionFootnote: string
  }
  tool: {
    running: string
    complete: string
    inProgress: string
    completed: string
    done: string
    labels: Record<string, string>
    overflow: (shown: string[], total: number) => string
  }
  tabHandoff: {
    eyebrow: string
    assistant: string
    you: string
    unknownTab: string
    closedTab: string
    questionTitle: string
    questionBody: (controlled: string, active: string) => string
    keep: string
    follow: string
    backgroundTitle: (controlled: string) => string
    backgroundBody: (active: string) => string
    followCurrent: string
    lostTitle: string
    lostBody: string
    useCurrent: string
  }
  question: {
    eyebrow: string
    title: string
    customAlternative: string
    customAnswer: string
    dismiss: string
    answer: string
    answering: string
    alreadyAnswered: string
    answerRejected: string
  }
  settings: {
    back: string
    eyebrow: string
    title: string
    bridgeAddress: string
    bridgeHelp: string
    bridgePlaceholder: string
    token: string
    tokenHelp: string
    tokenPlaceholder: string
    pageSharing: string
    pageSharingHelp: string
    sharingAuto: string
    sharingAsk: string
    sharingOff: string
    approvalNotifications: string
    approvalNotificationsHelp: string
    autoResumeSession: string
    autoResumeSessionHelp: string
    language: string
    languageHelp: string
    languageAuto: string
    languageEnglish: string
    languageRussian: string
    theme: string
    themeHelp: string
    themeSystem: string
    themeLight: string
    themeDark: string
    trustedOrigins: string
    trustedOriginsHelp: string
    trustedOriginInput: string
    add: string
    invalidOrigin: string
    noTrustedOrigins: string
    remove: string
    removeOrigin: (origin: string) => string
    save: string
    cancel: string
    snapshotHint: (maxChars: number) => string
    relaySection: string
    relayHelp: string
    relayName: string
    relayNamePlaceholder: string
    relayProtocol: string
    relayProtocolClaude: string
    relayProtocolOpenai: string
    relayProtocolCodex: string
    relayBaseUrl: string
    relayToken: string
    relayTokenPlaceholder: (configured: boolean) => string
    relayModels: string
    relayModelsHelp: string
    relayModelsPlaceholder: string
    relayAdd: string
    relayRemove: string
    relaySetDefault: string
    relaySetDefaultHelp: string
    relayFetchModels: string
    relayFetching: string
    relayFetchOk: (count: number) => string
    relayNeedBaseUrl: string
    relayOpenaiListingNote: string
    relayTest: string
    relayTesting: string
    relayTestOk: (count: number, names: string) => string
    relayTestFailed: (reason: string) => string
    relayTestManualOnly: string
    relaySavedOk: string
    relaySaveFailed: (reason: string) => string
    relayEmpty: string
    relayInvalidName: string
  }
  update: {
    eyebrow: string
    title: string
    idleTitle: string
    idleBody: string
    checking: string
    checkingBody: string
    currentTitle: string
    currentBody: (latestVersion: string) => string
    availableTitle: (latestVersion: string) => string
    availableLoadingBody: string
    availableManagedBody: string
    availableCheckoutBody: string
    availableUnknownBody: string
    reloadReminder: string
    loadingInstall: string
    managedInstall: string
    checkoutInstall: string
    unknownInstall: string
    errorTitle: string
    errorBody: string
    check: string
    copyManagedCommand: string
    copyCheckoutCommand: string
    copied: string
    copyError: string
  }
  app: {
    openSettings: string
    settings: string
    openSessions: string
    sessions: string
    newSession: string
    sessionPickerLoading: string
    sessionPickerEmpty: string
    deleteSession: string
    deleteSessionConfirm: (title: string) => string
    deleteSessionFailed: (reason: string) => string
    deletePurgeFailed: (reason: string) => string
    emptyTitle: string
    emptyDescription: string
    overviewPage: string
    overviewPrompt: string
    assistant: string
    assistantWorking: string
    organizingResults: string
    thinking: string
    connectedPlaceholder: string
    disconnectedPlaceholder: string
    composerHelp: string
    sendMessage: string
    stopTurn: string
    stoppingTurn: string
    addImages: string
    imageUnavailable: string
    removeImage: (name: string) => string
    image: string
    imageLoading: string
    imageLoadFailed: string
    openImage: string
    openNamedImage: (name: string) => string
    imagePreview: string
    closeImage: string
    imageUnsupported: (name: string) => string
    imageTooMany: (max: number) => string
    imageTooLarge: (name: string, max: string) => string
    imageMessageTooLarge: (max: string) => string
    imageDimensionTooLarge: (name: string, max: number) => string
    imagePixelsTooLarge: (name: string, max: number) => string
    imageDecodeFailed: (name: string) => string
    imageModelUnsupported: string
    imageSubagentUnsupported: string
    imageSendFailed: (reason: string) => string
    selectionChip: string
    selectionAttached: string
    selectionTruncated: string
    removeSelection: string
  }
}

const EN: PanelCopy = {
  documentTitle: 'dsh Browser Assistant',
  status: {
    connected: 'Connected',
    connecting: 'Connecting…',
    reconnecting: 'Reconnecting…',
    stopped: 'Disconnected',
  },
  approval: {
    eyebrow: 'Security check',
    readTitle: 'Allow page access?',
    actionTitle: 'Allow page action?',
    request: 'Request',
    origins: 'Origins involved',
    unknownOrigin: 'Unknown origin',
    deny: 'Deny',
    allowOnce: 'Allow once',
    alwaysAllowReads: 'Always allow reads',
    trustSession: 'Trust this domain for this session',
    readFootnote: 'Esc to deny · You can disable automatic reading in Settings at any time',
    actionFootnote: 'Esc to deny · Temporary trust ends when the side panel closes · Typed content is never shown',
  },
  tool: {
    running: 'Working on page',
    complete: 'Page action',
    inProgress: 'In progress',
    completed: 'Completed',
    done: 'Done',
    labels: {
      browser_snapshot: 'Read page',
      browser_click: 'Click element',
      browser_type: 'Enter text',
      browser_press: 'Press key',
      browser_scroll: 'Scroll page',
      browser_navigate: 'Open page',
      browser_back: 'Go back',
      browser_forward: 'Go forward',
      browser_reload: 'Reload page',
      browser_get_text: 'Extract text',
      browser_wait: 'Wait for page',
    },
    overflow: (shown, total) => `${shown.join(' → ')} → ${total - shown.length} more`,
  },
  tabHandoff: {
    eyebrow: 'Page handoff',
    assistant: 'Assistant',
    you: 'You',
    unknownTab: 'Untitled tab',
    closedTab: 'Closed tab',
    questionTitle: 'Follow your current page?',
    questionBody: (controlled, active) => `It is still bound to “${controlled}”, while you moved to “${active}”. Browser actions are paused until you choose.`,
    keep: 'Stay on original',
    follow: 'Follow current page',
    backgroundTitle: () => 'Assistant stays on the original page',
    backgroundBody: (active) => `You are viewing “${active}”. Future browser actions still run on the original page.`,
    followCurrent: 'Follow current page',
    lostTitle: 'The controlled tab was closed',
    lostBody: 'Browser actions are paused to avoid operating the wrong page.',
    useCurrent: 'Use current page',
  },
  question: {
    eyebrow: 'Waiting for your answer',
    title: 'The assistant needs your input',
    customAlternative: 'Or type a different answer',
    customAnswer: 'Type your answer',
    dismiss: 'Dismiss',
    answer: 'Answer',
    answering: 'Answering…',
    alreadyAnswered: 'This question was already handled in another window.',
    answerRejected: 'The answer was not accepted. Review it and try again.',
  },
  settings: {
    back: 'Back to chat',
    eyebrow: 'Browser assistant',
    title: 'Settings',
    bridgeAddress: 'Bridge address',
    bridgeHelp: 'Leave blank to detect a local service automatically',
    bridgePlaceholder: 'Auto-detect 3080 / 3081 / 3090 / 14389 / 43189',
    token: 'Token',
    tokenHelp: 'Required by Firefox and remote deployments',
    tokenPlaceholder: 'Required for Firefox / remote deployments',
    pageSharing: 'Page content sharing',
    pageSharingHelp: 'Control when the assistant can read page text',
    sharingAuto: 'Share automatically (default)',
    sharingAsk: 'Ask every time',
    sharingOff: 'Off',
    approvalNotifications: 'Browser approval notifications',
    approvalNotificationsHelp: 'Notify you when an approval arrives while the side panel is closed',
    autoResumeSession: 'Resume the last conversation',
    autoResumeSessionHelp: 'Reopen the most recently active browser conversation instead of starting over',
    language: 'Interface language',
    languageHelp: 'Auto follows the browser language; Chinese browsers keep the Chinese interface',
    languageAuto: 'Auto',
    languageEnglish: 'English',
    languageRussian: 'Russian',
    theme: 'Appearance',
    themeHelp: 'Choose a light or dark interface, or follow the system setting',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    trustedOrigins: 'Always-allowed domains',
    trustedOriginsHelp: 'The approval dialog can trust a domain for the current side-panel session only. Domains added here permanently skip action confirmation when every known origin is trusted. Wildcards include the base domain and subdomains, and stay scoped to their scheme and port; `*.example.com` defaults to HTTPS.',
    trustedOriginInput: 'Domain to always trust (e.g. https://example.com or https://*.example.com)',
    add: 'Add',
    invalidOrigin: 'Enter an http:// or https:// origin, or a wildcard such as https://*.example.com.',
    noTrustedOrigins: 'No domains are currently trusted.',
    remove: 'Remove',
    removeOrigin: (origin) => `Remove ${origin}`,
    save: 'Save & Connect',
    cancel: 'Cancel',
    snapshotHint: (maxChars) => `Page snapshots are limited to ${maxChars} characters and longer content is truncated. Change snapshotMaxChars in the dsh plugin to adjust this limit.`,
    relaySection: 'Models & API relay',
    relayHelp: 'Point the assistant at your own API relay. Each profile becomes one provider route; changes take effect on the next message without a restart.',
    relayName: 'Profile name',
    relayNamePlaceholder: 'e.g. my-relay',
    relayProtocol: 'API format',
    relayProtocolClaude: 'Claude (Anthropic Messages)',
    relayProtocolOpenai: 'OpenAI (Chat Completions)',
    relayProtocolCodex: 'Codex (OpenAI Responses)',
    relayBaseUrl: 'Base URL',
    relayToken: 'Token',
    relayTokenPlaceholder: (configured) => configured ? 'Saved — type to replace' : 'API token for the relay',
    relayModels: 'Models',
    relayModelsHelp: 'One model per line as `id, context window` — e.g. `claude-sonnet-4-5, 200000`. The context window is optional.',
    relayModelsPlaceholder: 'model-id, 128000',
    relayFetchModels: 'Fetch models',
    relayFetching: 'Fetching models…',
    relayFetchOk: (count) => `Filled in ${count} models from the relay.`,
    relayNeedBaseUrl: 'Enter a base URL first.',
    relayOpenaiListingNote: ' (listed via the relay\'s OpenAI-compatible endpoint)',
    relayAdd: 'Add profile',
    relayRemove: 'Remove profile',
    relaySetDefault: 'Use as default model',
    relaySetDefaultHelp: 'New conversations start with the first model of this profile',
    relayTest: 'Test connection',
    relayTesting: 'Testing…',
    relayTestOk: (count, names) => `OK — ${count} model(s): ${names}`,
    relayTestFailed: (reason) => `Failed: ${reason}`,
    relayTestManualOnly: 'This protocol does not support listing models; fill them in manually.',
    relaySavedOk: 'Relay profiles saved.',
    relaySaveFailed: (reason) => `Saving failed: ${reason}`,
    relayEmpty: 'No relay profiles yet.',
    relayInvalidName: 'Enter a profile name.',
  },
  update: {
    eyebrow: 'Release channel',
    title: 'Updates',
    idleTitle: 'Ready to check',
    idleBody: 'Compare this build with the version on GitHub main.',
    checking: 'Checking…',
    checkingBody: 'Reading the latest extension manifest from GitHub.',
    currentTitle: 'No update found',
    currentBody: (latestVersion) => `Repository version: v${latestVersion}.`,
    availableTitle: (latestVersion) => `Version ${latestVersion} is available`,
    availableLoadingBody: 'Confirming how this extension was installed before offering an update command.',
    availableManagedBody: 'Copy the managed update command and run it in Terminal.',
    availableCheckoutBody: 'Pull or switch to the revision you want in the original checkout, then rerun its installer.',
    availableUnknownBody: 'This copy predates install-source metadata. Use the same update flow you originally installed with; no command will be copied.',
    reloadReminder: 'After updating, open chrome://extensions, find “dsh Browser Assistant,” click the rotating-arrow Reload button on its card, then restart dsh.',
    loadingInstall: 'Identifying install…',
    managedInstall: 'Managed install',
    checkoutInstall: 'Local checkout',
    unknownInstall: 'Install source unknown',
    errorTitle: 'Could not check for updates',
    errorBody: 'Check your network connection and try again.',
    check: 'Check for updates',
    copyManagedCommand: 'Copy update command',
    copyCheckoutCommand: 'Copy checkout command',
    copied: 'Command copied',
    copyError: 'Could not copy the command. Run the installer from the original installation source instead.',
  },
  app: {
    openSettings: 'Open settings',
    settings: 'Settings',
    openSessions: 'Session history',
    sessions: 'Sessions',
    newSession: 'New chat',
    sessionPickerLoading: 'Loading…',
    sessionPickerEmpty: 'No past sessions yet',
    deleteSession: 'Delete session',
    deleteSessionConfirm: (title) => `Delete “${title}”? Its conversation history will be removed permanently.`,
    deleteSessionFailed: (reason) => `Delete failed: ${reason}`,
    deletePurgeFailed: (reason) => `Removed from the list, but file cleanup failed (it may reappear after dsh restarts): ${reason}`,
    emptyTitle: 'Hand me the current page',
    emptyDescription: 'I can read the page, find information, and click, fill, or navigate for you.',
    overviewPage: 'Give me an overview',
    overviewPrompt: 'First give me an overview of the current page, tell me the most important information, and wait for my next instruction.',
    assistant: 'Assistant',
    assistantWorking: 'Assistant is working',
    organizingResults: 'Organizing results',
    thinking: 'Thinking',
    connectedPlaceholder: 'Tell me what you want to do on this page…',
    disconnectedPlaceholder: 'Connect to dsh to get started',
    composerHelp: 'Enter to send · Shift + Enter for a new line',
    sendMessage: 'Send message',
    stopTurn: 'Stop generating',
    stoppingTurn: 'Stopping…',
    addImages: 'Add images',
    imageUnavailable: 'This dsh host does not advertise image input',
    removeImage: (name) => `Remove ${name}`,
    image: 'Image',
    imageLoading: 'Loading…',
    imageLoadFailed: 'Could not load · Retry',
    openImage: 'Open original image',
    openNamedImage: (name) => `Open ${name}`,
    imagePreview: 'Image preview',
    closeImage: 'Close image preview',
    imageUnsupported: (name) => `${name} is not an image format supported by this dsh host.`,
    imageTooMany: (max) => `You can attach up to ${max} images to one message.`,
    imageTooLarge: (name, max) => `${name} is larger than the per-image limit of ${max}.`,
    imageMessageTooLarge: (max) => `The images in this message exceed the combined limit of ${max}.`,
    imageDimensionTooLarge: (name, max) => `${name} exceeds the maximum width or height of ${max}px.`,
    imagePixelsTooLarge: (name, max) => `${name} exceeds the ${max.toLocaleString()}-pixel limit.`,
    imageDecodeFailed: (name) => `${name} could not be decoded as an image.`,
    imageModelUnsupported: 'The current model does not support images; switch to a model that does.',
    imageSubagentUnsupported: 'Subagent sessions do not support images yet.',
    imageSendFailed: (reason) => `Sending images failed (${reason}). Your draft has been restored; try again.`,
    selectionChip: '1 selection',
    selectionAttached: 'Selected text',
    selectionTruncated: '(truncated)',
    removeSelection: 'Remove the selected text',
  },
}

const ZH: PanelCopy = {
  documentTitle: 'dsh 浏览器助手',
  status: {
    connected: '已连接',
    connecting: '连接中…',
    reconnecting: '重连中…',
    stopped: '未连接',
  },
  approval: {
    eyebrow: '安全检查',
    readTitle: '允许读取页面？',
    actionTitle: '允许执行页面操作？',
    request: '请求',
    origins: '涉及来源',
    unknownOrigin: '未知来源',
    deny: '拒绝',
    allowOnce: '仅允许这一次',
    alwaysAllowReads: '始终允许读取',
    trustSession: '本次会话信任此域',
    readFootnote: 'Esc 拒绝 · 可随时在设置中关闭自动读取',
    actionFootnote: 'Esc 拒绝 · 关闭侧栏后临时信任失效 · 输入内容不会显示',
  },
  tool: {
    running: '正在操作页面',
    complete: '页面操作',
    inProgress: '进行中',
    completed: '已完成',
    done: '完成',
    labels: {
      browser_snapshot: '读取页面',
      browser_click: '点击元素',
      browser_type: '填写内容',
      browser_press: '按下按键',
      browser_scroll: '滚动页面',
      browser_navigate: '打开页面',
      browser_back: '返回上一页',
      browser_forward: '前进下一页',
      browser_reload: '刷新页面',
      browser_get_text: '提取文字',
      browser_wait: '等待页面',
    },
    overflow: (shown, total) => `${shown.join(' → ')} 等${total}个工具`,
  },
  tabHandoff: {
    eyebrow: '页面交接',
    assistant: '助手',
    you: '你',
    unknownTab: '未命名标签页',
    closedTab: '已关闭的标签页',
    questionTitle: '助手要跟随当前页面吗？',
    questionBody: (controlled, active) => `助手仍绑定“${controlled}”，你刚切到“${active}”。选择前，浏览器操作会暂停。`,
    keep: '留在原页面',
    follow: '跟随当前页面',
    backgroundTitle: () => '助手仍在原页面',
    backgroundBody: (active) => `你正在查看“${active}”，后续浏览器操作仍会在原页面执行。`,
    followCurrent: '改为跟随当前页',
    lostTitle: '受控标签页已关闭',
    lostBody: '为避免操作错页，浏览器操作已暂停。',
    useCurrent: '使用当前页面',
  },
  question: {
    eyebrow: '等待你的回答',
    title: '助手需要你确认',
    customAlternative: '或输入其他答案',
    customAnswer: '输入你的答案',
    dismiss: '放弃',
    answer: '回答',
    answering: '回答中…',
    alreadyAnswered: '这个问题已在另一个窗口中处理。',
    answerRejected: '回答未被接受，请检查后重试。',
  },
  settings: {
    back: '返回对话',
    eyebrow: '浏览器助手',
    title: '设置',
    bridgeAddress: '桥地址',
    bridgeHelp: '留空时自动检测本机服务',
    bridgePlaceholder: '自动检测 3080 / 3081 / 3090 / 14389 / 43189',
    token: '令牌',
    tokenHelp: 'Firefox 和远程部署需要填写',
    tokenPlaceholder: 'Firefox / 远程部署时填写',
    pageSharing: '页面内容共享',
    pageSharingHelp: '控制助手何时可以读取页面文字',
    sharingAuto: '自动共享（默认）',
    sharingAsk: '每次询问',
    sharingOff: '关闭',
    approvalNotifications: '浏览器审批通知',
    approvalNotificationsHelp: '侧栏关闭时收到审批请求，通过系统通知提醒你',
    autoResumeSession: '续接上次会话',
    autoResumeSessionHelp: '重新打开最近活跃的浏览器会话，而不是从新会话开始',
    language: '界面语言',
    languageHelp: '自动模式跟随浏览器语言；中文浏览器仍显示中文界面',
    languageAuto: '自动',
    languageEnglish: 'English',
    languageRussian: 'Русский',
    theme: '外观',
    themeHelp: '选择浅色或深色界面，或跟随系统设置',
    themeSystem: '跟随系统',
    themeLight: '浅色',
    themeDark: '深色',
    trustedOrigins: '永久免确认域名',
    trustedOriginsHelp: '审批框可只信任本次侧栏会话。这里添加的域名仅在所有已知来源均受信任时免除操作确认。通配符包含主域及其子域，并严格区分协议和端口；`*.example.com` 默认使用 HTTPS。',
    trustedOriginInput: '要永久信任的域名（如 https://example.com 或 https://*.example.com）',
    add: '添加',
    invalidOrigin: '请输入 http://、https:// 来源或 https://*.example.com 形式的通配符。',
    noTrustedOrigins: '尚未信任任何域名。',
    remove: '移除',
    removeOrigin: (origin) => `移除 ${origin}`,
    save: '保存并连接',
    cancel: '取消',
    snapshotHint: (maxChars) => `页面快照上限为 ${maxChars} 字符，超出内容会被截断。可在 dsh 插件中调整 snapshotMaxChars。`,
    relaySection: '模型与中转服务',
    relayHelp: '把助手接到你自己的 API 中转站。每个档案对应一条提供方路由，保存后下一条消息即生效，无需重启。',
    relayName: '档案名称',
    relayNamePlaceholder: '例如 my-relay',
    relayProtocol: '接口格式',
    relayProtocolClaude: 'Claude（Anthropic Messages）',
    relayProtocolOpenai: 'OpenAI（Chat Completions）',
    relayProtocolCodex: 'Codex（OpenAI Responses）',
    relayBaseUrl: '中转地址 Base URL',
    relayToken: '令牌 Token',
    relayTokenPlaceholder: (configured) => configured ? '已保存 — 输入可替换' : '中转站的 API 令牌',
    relayModels: '模型列表',
    relayModelsHelp: '每行一个模型，格式 `模型ID, 上下文窗口` — 如 `claude-sonnet-4-5, 200000`。上下文窗口可省略。',
    relayModelsPlaceholder: 'model-id, 128000',
    relayFetchModels: '获取模型列表',
    relayFetching: '正在获取模型列表…',
    relayFetchOk: (count) => `已从中转站填入 ${count} 个模型。`,
    relayNeedBaseUrl: '请先填写中转地址 Base URL。',
    relayOpenaiListingNote: '（经中转站的 OpenAI 兼容接口列出）',
    relayAdd: '添加档案',
    relayRemove: '删除档案',
    relaySetDefault: '设为默认模型',
    relaySetDefaultHelp: '新会话将默认使用该档案的第一个模型',
    relayTest: '测试连接',
    relayTesting: '测试中…',
    relayTestOk: (count, names) => `连接成功 — ${count} 个模型：${names}`,
    relayTestFailed: (reason) => `连接失败：${reason}`,
    relayTestManualOnly: '该协议不支持在线列出模型，请手动填写模型列表。',
    relaySavedOk: '中转配置已保存。',
    relaySaveFailed: (reason) => `保存失败：${reason}`,
    relayEmpty: '还没有中转档案。',
    relayInvalidName: '请填写档案名称。',
  },
  update: {
    eyebrow: '发布通道',
    title: '软件更新',
    idleTitle: '可以检查新版本',
    idleBody: '与 GitHub main 上的扩展版本进行比较。',
    checking: '正在检查…',
    checkingBody: '正在读取 GitHub 上的最新扩展清单。',
    currentTitle: '未发现更新',
    currentBody: (latestVersion) => `仓库版本：v${latestVersion}。`,
    availableTitle: (latestVersion) => `发现新版本 ${latestVersion}`,
    availableLoadingBody: '正在确认此扩展的安装来源，然后再提供更新命令。',
    availableManagedBody: '复制托管更新命令并在终端运行。',
    availableCheckoutBody: '请先在原 checkout 中 pull 或切换到目标 revision，再重新运行其中的安装脚本。',
    availableUnknownBody: '这个副本没有安装来源记录。请沿用最初的更新方式；这里不会复制可能覆盖来源的命令。',
    reloadReminder: '更新完成后，打开 chrome://extensions，找到“dsh 浏览器助手”，点击卡片上的“重新加载”旋转箭头，然后重启 dsh。',
    loadingInstall: '正在识别安装来源…',
    managedInstall: '托管安装',
    checkoutInstall: '本地 checkout',
    unknownInstall: '安装来源未知',
    errorTitle: '暂时无法检查更新',
    errorBody: '请检查网络连接，然后重试。',
    check: '检查更新',
    copyManagedCommand: '复制更新命令',
    copyCheckoutCommand: '复制 checkout 命令',
    copied: '命令已复制',
    copyError: '无法复制命令，请回到原安装来源重新运行安装脚本。',
  },
  app: {
    openSettings: '打开设置',
    settings: '设置',
    openSessions: '历史会话',
    sessions: '会话',
    newSession: '新对话',
    sessionPickerLoading: '加载中…',
    sessionPickerEmpty: '暂无历史会话',
    deleteSession: '删除会话',
    deleteSessionConfirm: (title) => `确定删除「${title}」吗？对话历史将被永久移除。`,
    deleteSessionFailed: (reason) => `删除失败：${reason}`,
    deletePurgeFailed: (reason) => `已从列表移除，但文件清理失败（dsh 重启后可能再次出现）：${reason}`,
    emptyTitle: '把当前页面交给我',
    emptyDescription: '我可以阅读页面、查找信息，也可以替你点击、填写和导航。',
    overviewPage: '先概览这个页面',
    overviewPrompt: '请先概览当前页面，告诉我最重要的信息，并等待我的下一步指令。',
    assistant: '助手',
    assistantWorking: '助手正在处理',
    organizingResults: '正在整理结果',
    thinking: '正在思考',
    connectedPlaceholder: '告诉我想在这个页面做什么…',
    disconnectedPlaceholder: '连接 dsh 后即可开始',
    composerHelp: 'Enter 发送 · Shift + Enter 换行',
    sendMessage: '发送消息',
    stopTurn: '停止生成',
    stoppingTurn: '正在停止…',
    addImages: '添加图片',
    imageUnavailable: '当前 dsh 宿主未声明图片输入能力',
    removeImage: (name) => `移除 ${name}`,
    image: '图片',
    imageLoading: '加载中…',
    imageLoadFailed: '加载失败 · 重试',
    openImage: '查看原图',
    openNamedImage: (name) => `查看 ${name}`,
    imagePreview: '图片预览',
    closeImage: '关闭图片预览',
    imageUnsupported: (name) => `${name} 不是当前 dsh 宿主支持的图片格式。`,
    imageTooMany: (max) => `每条消息最多可添加 ${max} 张图片。`,
    imageTooLarge: (name, max) => `${name} 超过单张图片 ${max} 的限制。`,
    imageMessageTooLarge: (max) => `本条消息的图片总大小超过 ${max}。`,
    imageDimensionTooLarge: (name, max) => `${name} 的宽或高超过 ${max}px。`,
    imagePixelsTooLarge: (name, max) => `${name} 超过 ${max.toLocaleString()} 像素的限制。`,
    imageDecodeFailed: (name) => `无法将 ${name} 解码为图片。`,
    imageModelUnsupported: '当前模型不支持图片，请切换到支持图片的模型。',
    imageSubagentUnsupported: '子智能体会话暂不支持图片。',
    imageSendFailed: (reason) => `图片发送失败（${reason}）。草稿已恢复，请重试。`,
    selectionChip: '1 处选中内容',
    selectionAttached: '选中的网页内容',
    selectionTruncated: '（已截断）',
    removeSelection: '移除选中内容',
  },
}

const RU: PanelCopy = {
  documentTitle: 'Браузерный ассистент dsh',
  status: {
    connected: 'Подключено',
    connecting: 'Подключение…',
    reconnecting: 'Повторное подключение…',
    stopped: 'Отключено',
  },
  approval: {
    eyebrow: 'Проверка безопасности',
    readTitle: 'Разрешить доступ к странице?',
    actionTitle: 'Разрешить действие на странице?',
    request: 'Запрос',
    origins: 'Затронутые источники',
    unknownOrigin: 'Неизвестный источник',
    deny: 'Запретить',
    allowOnce: 'Разрешить один раз',
    alwaysAllowReads: 'Всегда разрешать чтение',
    trustSession: 'Доверять этому домену в текущем сеансе',
    readFootnote: 'Esc — запретить · Автоматическое чтение можно в любой момент отключить в настройках',
    actionFootnote: 'Esc — запретить · Временное доверие отменяется при закрытии боковой панели · Введённый текст никогда не отображается',
  },
  tool: {
    running: 'Работа со страницей',
    complete: 'Действие на странице',
    inProgress: 'Выполняется',
    completed: 'Выполнено',
    done: 'Готово',
    labels: {
      browser_snapshot: 'Прочитать страницу',
      browser_click: 'Нажать на элемент',
      browser_type: 'Ввести текст',
      browser_press: 'Нажать клавишу',
      browser_scroll: 'Прокрутить страницу',
      browser_navigate: 'Открыть страницу',
      browser_back: 'Назад',
      browser_forward: 'Вперёд',
      browser_reload: 'Перезагрузить страницу',
      browser_get_text: 'Извлечь текст',
      browser_wait: 'Подождать загрузку страницы',
    },
    overflow: (shown, total) => `${shown.join(' → ')} → ещё ${total - shown.length}`,
  },
  tabHandoff: {
    eyebrow: 'Передача страницы',
    assistant: 'Ассистент',
    you: 'Вы',
    unknownTab: 'Вкладка без названия',
    closedTab: 'Закрытая вкладка',
    questionTitle: 'Перейти на текущую страницу?',
    questionBody: (controlled, active) => `Ассистент всё ещё привязан к странице «${controlled}», а вы перешли на «${active}». Действия в браузере приостановлены, пока вы не сделаете выбор.`,
    keep: 'Остаться на исходной',
    follow: 'Перейти на текущую страницу',
    backgroundTitle: () => 'Ассистент остаётся на исходной странице',
    backgroundBody: (active) => `Сейчас вы просматриваете «${active}». Следующие действия в браузере по-прежнему будут выполняться на исходной странице.`,
    followCurrent: 'Перейти на текущую страницу',
    lostTitle: 'Управляемая вкладка была закрыта',
    lostBody: 'Действия в браузере приостановлены, чтобы не затронуть другую страницу.',
    useCurrent: 'Использовать текущую страницу',
  },
  question: {
    eyebrow: 'Ожидание вашего ответа',
    title: 'Ассистенту нужен ваш ответ',
    customAlternative: 'Или введите другой ответ',
    customAnswer: 'Введите ответ',
    dismiss: 'Закрыть',
    answer: 'Ответить',
    answering: 'Отправка ответа…',
    alreadyAnswered: 'На этот вопрос уже ответили в другом окне.',
    answerRejected: 'Ответ не принят. Проверьте его и попробуйте снова.',
  },
  settings: {
    back: 'Вернуться в чат',
    eyebrow: 'Браузерный ассистент',
    title: 'Настройки',
    bridgeAddress: 'Адрес моста',
    bridgeHelp: 'Оставьте поле пустым, чтобы автоматически найти локальную службу',
    bridgePlaceholder: 'Автоопределение: 3080 / 3081 / 3090 / 14389 / 43189',
    token: 'Токен',
    tokenHelp: 'Необходим для Firefox и удалённых развёртываний',
    tokenPlaceholder: 'Необходим для Firefox и удалённых развёртываний',
    pageSharing: 'Передача содержимого страницы',
    pageSharingHelp: 'Укажите, когда ассистенту разрешено читать текст страницы',
    sharingAuto: 'Передавать автоматически (по умолчанию)',
    sharingAsk: 'Спрашивать каждый раз',
    sharingOff: 'Выключено',
    approvalNotifications: 'Уведомления о запросах браузера',
    approvalNotificationsHelp: 'Уведомлять о запросах на подтверждение, когда боковая панель закрыта',
    autoResumeSession: 'Продолжать последний диалог',
    autoResumeSessionHelp: 'Открывать последний активный диалог в браузере, а не начинать заново',
    language: 'Язык интерфейса',
    languageHelp: 'Автоматический режим использует язык браузера; китайский интерфейс сохраняется для браузеров на китайском',
    languageAuto: 'Автоматически',
    languageEnglish: 'English',
    languageRussian: 'Русский',
    theme: 'Оформление',
    themeHelp: 'Выберите светлую или тёмную тему либо используйте системную настройку',
    themeSystem: 'Как в системе',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    trustedOrigins: 'Всегда разрешённые домены',
    trustedOriginsHelp: 'В диалоге подтверждения домену можно доверять только до закрытия текущей боковой панели. Добавленные здесь домены навсегда отключают подтверждение действий, если все известные источники являются доверенными. Подстановочные знаки охватывают основной домен и его поддомены, но остаются привязанными к схеме и порту; для `*.example.com` по умолчанию используется HTTPS.',
    trustedOriginInput: 'Домен, которому нужно всегда доверять (например, https://example.com или https://*.example.com)',
    add: 'Добавить',
    invalidOrigin: 'Введите источник с http:// или https:// либо шаблон, например https://*.example.com.',
    noTrustedOrigins: 'Сейчас нет доверенных доменов.',
    remove: 'Удалить',
    removeOrigin: (origin) => `Удалить ${origin}`,
    save: 'Сохранить и подключиться',
    cancel: 'Отмена',
    snapshotHint: (maxChars) => `Снимки страниц ограничены ${maxChars} символами, более длинное содержимое обрезается. Чтобы изменить ограничение, настройте snapshotMaxChars в плагине dsh.`,
    relaySection: 'Модели и API-шлюз',
    relayHelp: 'Подключите ассистента к собственному API-шлюзу. Каждый профиль создаёт отдельный маршрут провайдера; изменения применяются к следующему сообщению без перезапуска.',
    relayName: 'Название профиля',
    relayNamePlaceholder: 'например, my-relay',
    relayProtocol: 'Формат API',
    relayProtocolClaude: 'Claude (Anthropic Messages)',
    relayProtocolOpenai: 'OpenAI (Chat Completions)',
    relayProtocolCodex: 'Codex (OpenAI Responses)',
    relayBaseUrl: 'Базовый URL',
    relayToken: 'Токен',
    relayTokenPlaceholder: (configured) => configured ? 'Сохранён — введите новый для замены' : 'API-токен шлюза',
    relayModels: 'Модели',
    relayModelsHelp: 'Одна модель на строку в формате `идентификатор, размер контекста`, например `claude-sonnet-4-5, 200000`. Размер контекста указывать необязательно.',
    relayModelsPlaceholder: 'model-id, 128000',
    relayFetchModels: 'Получить модели',
    relayFetching: 'Получение моделей…',
    relayFetchOk: (count) => `Из шлюза добавлено моделей: ${count}.`,
    relayNeedBaseUrl: 'Сначала введите базовый URL.',
    relayOpenaiListingNote: ' (получено через OpenAI-совместимую конечную точку шлюза)',
    relayAdd: 'Добавить профиль',
    relayRemove: 'Удалить профиль',
    relaySetDefault: 'Использовать как модель по умолчанию',
    relaySetDefaultHelp: 'Новые диалоги будут начинаться с первой модели этого профиля',
    relayTest: 'Проверить подключение',
    relayTesting: 'Проверка…',
    relayTestOk: (count, names) => `Подключение успешно — моделей: ${count}: ${names}`,
    relayTestFailed: (reason) => `Ошибка: ${reason}`,
    relayTestManualOnly: 'Этот протокол не поддерживает получение списка моделей; укажите их вручную.',
    relaySavedOk: 'Профили шлюза сохранены.',
    relaySaveFailed: (reason) => `Не удалось сохранить: ${reason}`,
    relayEmpty: 'Профилей шлюза пока нет.',
    relayInvalidName: 'Введите название профиля.',
  },
  update: {
    eyebrow: 'Канал выпуска',
    title: 'Обновления',
    idleTitle: 'Можно проверить обновления',
    idleBody: 'Сравнить эту сборку с версией в ветке main на GitHub.',
    checking: 'Проверка…',
    checkingBody: 'Получение последнего манифеста расширения с GitHub.',
    currentTitle: 'Обновлений нет',
    currentBody: (latestVersion) => `Версия в репозитории: v${latestVersion}.`,
    availableTitle: (latestVersion) => `Доступна версия ${latestVersion}`,
    availableLoadingBody: 'Проверяем способ установки расширения, прежде чем предложить команду обновления.',
    availableManagedBody: 'Скопируйте команду управляемого обновления и выполните её в терминале.',
    availableCheckoutBody: 'В исходной рабочей копии получите изменения или переключитесь на нужную ревизию, затем снова запустите установщик из неё.',
    availableUnknownBody: 'Эта копия создана до появления сведений об источнике установки. Используйте тот же способ обновления, которым выполнялась установка; команда скопирована не будет.',
    reloadReminder: 'После обновления откройте chrome://extensions, найдите «Браузерный ассистент dsh», нажмите кнопку «Перезагрузить» с вращающейся стрелкой на его карточке, затем перезапустите dsh.',
    loadingInstall: 'Определение способа установки…',
    managedInstall: 'Управляемая установка',
    checkoutInstall: 'Локальная рабочая копия',
    unknownInstall: 'Источник установки неизвестен',
    errorTitle: 'Не удалось проверить обновления',
    errorBody: 'Проверьте подключение к сети и попробуйте снова.',
    check: 'Проверить обновления',
    copyManagedCommand: 'Скопировать команду обновления',
    copyCheckoutCommand: 'Скопировать команду для рабочей копии',
    copied: 'Команда скопирована',
    copyError: 'Не удалось скопировать команду. Запустите установщик из исходного источника установки.',
  },
  app: {
    openSettings: 'Открыть настройки',
    settings: 'Настройки',
    openSessions: 'История сеансов',
    sessions: 'Сеансы',
    newSession: 'Новый чат',
    sessionPickerLoading: 'Загрузка…',
    sessionPickerEmpty: 'Предыдущих сеансов пока нет',
    deleteSession: 'Удалить сеанс',
    deleteSessionConfirm: (title) => `Удалить «${title}»? История этого диалога будет удалена без возможности восстановления.`,
    deleteSessionFailed: (reason) => `Не удалось удалить: ${reason}`,
    deletePurgeFailed: (reason) => `Сеанс удалён из списка, но очистить файлы не удалось (после перезапуска dsh он может появиться снова): ${reason}`,
    emptyTitle: 'Передайте мне текущую страницу',
    emptyDescription: 'Я могу прочитать страницу, найти информацию, нажать на элементы, заполнить поля или перейти по нужному адресу.',
    overviewPage: 'Обзор страницы',
    overviewPrompt: 'Сначала сделай обзор текущей страницы, расскажи самое важное и дождись моей следующей команды.',
    assistant: 'Ассистент',
    assistantWorking: 'Ассистент работает',
    organizingResults: 'Подготовка результатов',
    thinking: 'Размышление',
    connectedPlaceholder: 'Расскажите, что нужно сделать на этой странице…',
    disconnectedPlaceholder: 'Чтобы начать, подключитесь к dsh',
    composerHelp: 'Enter — отправить · Shift + Enter — новая строка',
    sendMessage: 'Отправить сообщение',
    stopTurn: 'Остановить генерацию',
    stoppingTurn: 'Остановка…',
    addImages: 'Добавить изображения',
    imageUnavailable: 'Этот хост dsh не сообщает о поддержке ввода изображений',
    removeImage: (name) => `Удалить ${name}`,
    image: 'Изображение',
    imageLoading: 'Загрузка…',
    imageLoadFailed: 'Не удалось загрузить · Повторить',
    openImage: 'Открыть исходное изображение',
    openNamedImage: (name) => `Открыть ${name}`,
    imagePreview: 'Предпросмотр изображения',
    closeImage: 'Закрыть предпросмотр изображения',
    imageUnsupported: (name) => `${name}: этот формат изображения не поддерживается данным хостом dsh.`,
    imageTooMany: (max) => `К одному сообщению можно прикрепить не более ${max} изображений.`,
    imageTooLarge: (name, max) => `${name} превышает ограничение ${max} для одного изображения.`,
    imageMessageTooLarge: (max) => `Общий размер изображений в этом сообщении превышает ${max}.`,
    imageDimensionTooLarge: (name, max) => `${name}: ширина или высота превышает допустимые ${max}px.`,
    imagePixelsTooLarge: (name, max) => `${name} превышает ограничение в ${max.toLocaleString()} пикселей.`,
    imageDecodeFailed: (name) => `Не удалось декодировать ${name} как изображение.`,
    imageModelUnsupported: 'Текущая модель не поддерживает изображения. Переключитесь на модель с такой поддержкой.',
    imageSubagentUnsupported: 'Сеансы субагентов пока не поддерживают изображения.',
    imageSendFailed: (reason) => `Не удалось отправить изображения (${reason}). Черновик восстановлен; попробуйте снова.`,
    selectionChip: '1 выделение',
    selectionAttached: 'Выделенный текст',
    selectionTruncated: '(обрезано)',
    removeSelection: 'Удалить выделенный текст',
  },
}

export const PANEL_COPY: Record<UiLocale, PanelCopy> = { en: EN, zh: ZH, ru: RU }
