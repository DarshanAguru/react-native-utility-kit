export const KEYS = {
    APP_THEME: 'APP_THEME'
} as const;

export type StorageKey = (typeof KEYS)[keyof typeof KEYS];