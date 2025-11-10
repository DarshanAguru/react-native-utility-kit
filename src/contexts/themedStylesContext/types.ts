import type { ReactNode } from "react";
import type { StoreType } from "../../utils";
import type { ThemePreset } from "../../themes";



/**
 * ThemeNamesChoice
 * Possible theme modes a user can select.
 */
export type ThemeNamesChoice = "light"|"dark"|"systemDefault";


/**
 * ThemesType
 * Object containing Light and Dark theme presets conforming to ThemePreset.
 */
export type ThemesType = {LightTheme: ThemePreset, DarkTheme:ThemePreset};


/**
 * ThemeContextType
 * Context shape exposed by ThemeProvider.
 * - theme: The active ThemePreset object.
 * - setTheme: Async function to change mode and persist to storage.
 * - themeMode: Current mode ("light" | "dark" | "systemDefault"), or undefined initially.
 */
export interface ThemeContextType {
    theme: ThemePreset;
    setTheme: (themeName: ThemeNamesChoice) => void;
    themeMode: string|undefined;
}


export interface IThemeProvider{
    storage: any;
    storageType: StoreType;
    children: ReactNode;
    Themes?: ThemesType;
}