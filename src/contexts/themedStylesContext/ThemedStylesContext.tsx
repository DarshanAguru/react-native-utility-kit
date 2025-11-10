import {ThemedColorPreset, type ThemePreset} from '../../themes'
import { PersistStorage } from '../../utils';
import { useContext, useEffect, useMemo, useState } from 'react';
import { createContext } from "react";
import { useColorScheme } from 'react-native';
import { KEYS } from '../../utils';
import { ScaledSheet } from 'react-native-size-matters';
import type { IThemeProvider, ThemeContextType, ThemeNamesChoice } from './types';


const ThemeContext = createContext<ThemeContextType>({
    theme: ThemedColorPreset.LightTheme,
    setTheme: ()=> {},
    themeMode:"light",
});

/**
 * ThemeProvider
 * Inject into your app once. Manages the theme lifecycle:
 * - Reads saved mode from storage on mount.
 * - Applies system color scheme if mode === "systemDefault".
 * - Persists changes to storage under KEYS.APP_THEME.
 *
 * @param storage - storage backend instance (e.g., AsyncStorage)
 * @param storageType - storage adapter type used by PersistStorage
 * @param children - React nodes to render under the provider
 * @param Themes - optional overrides for LightTheme and DarkTheme
 *
 * @example
 * <ThemeProvider storage={AsyncStorage} storageType="async" Themes={ThemedColorPreset}>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({
    Themes = ThemedColorPreset,
    storage,
    storageType,
    children
}: IThemeProvider) => {
    const Store = PersistStorage(storage,storageType);
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemePreset>(Themes.LightTheme);
    const [themeMode, setThemeMode] = useState<ThemeNamesChoice|undefined>("light");

    const applyTheme = async (themeName: ThemeNamesChoice) => {
    //    console.log('apply_theme: ', themeName)
       let theme:string = themeName;
       if(themeName === "systemDefault")
       {
           if(systemColorScheme)
           {
            theme = systemColorScheme;
           }
       }
        switch (theme) {
            case 'light':
                setTheme(Themes.LightTheme);
                break;
            case 'dark':
                setTheme(Themes.DarkTheme);
                break;
            default:
                setTheme(Themes.LightTheme);
                break;
        }
        await Store.setItem(KEYS.APP_THEME, themeName);
        setThemeMode(themeName);
    }

    useEffect(()=> {
        (async ()=> {
            const savedTheme = await Store.getItem(KEYS.APP_THEME);
            if (savedTheme) {
                applyTheme(savedTheme as ThemeNamesChoice);
                setThemeMode(savedTheme as ThemeNamesChoice);
            }
        })();
    }, [systemColorScheme]);


    return (
        <ThemeContext.Provider value={{theme, setTheme: applyTheme, themeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}



/**
 * useCustomTheme
 * Hook to access current theme and change the mode.
 *
 * @returns { theme, setTheme, themeMode }
 *
 * @throws Error if called outside ThemeProvider
 *
 * @example
 * const { theme, setTheme, themeMode } = useCustomTheme();
 */
export const useCustomTheme = ()=>{
    let ctx = useContext(ThemeContext);
    if(!ctx)
    {
        throw new Error("No Theme context Present");
    }
    return ctx;
}


/**
 * useThemedStyles
 * Hook to create ScaledSheet styles that react to theme changes.
 *
 * @param styleFn - receives ThemePreset and returns style object
 * @returns ScaledSheet
 *
 * @example
 * const styles = useThemedStyles((t) => ({
 *   container: { backgroundColor: t.backgroundColor, padding: '16@s' },
 * }));
 */
export const useThemedStyles = (styleFn: (theme: any) => any) => {
  const { theme } = useContext(ThemeContext);
  return useMemo(
    () => ScaledSheet.create(styleFn(theme)), [theme]
  );
}