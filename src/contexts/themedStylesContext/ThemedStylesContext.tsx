import {ThemedColorPreset} from '../../themes'
import { PersistStorage } from '../../utils';
import React, { type ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { createContext } from "react";
import { useColorScheme } from 'react-native';
import { KEYS, type StoreType } from '../../utils';
import { ScaledSheet } from 'react-native-size-matters';



type ThemeType = typeof ThemedColorPreset.LightTheme

export type ThemeNamesChoice = "light"|"dark"|"systemDefault";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (themeName: ThemeNamesChoice) => void;
    themeMode: string|undefined;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: ThemedColorPreset.LightTheme,
    setTheme: ()=> {},
    themeMode:"light",
});

export interface IThemeProvider{
    storage: any;
    storageType: StoreType;
    children: ReactNode;
}

export const ThemeProvider = ({storage, storageType, children}: IThemeProvider) => {
    const Store = PersistStorage(storage,storageType);
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeType>(ThemedColorPreset.LightTheme);
    const [themeMode, setThemeMode] = useState<ThemeNamesChoice|undefined>("light");

    const applyTheme = async (themeName: ThemeNamesChoice) => {
       console.log('apply_theme: ', themeName)
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
                setTheme(ThemedColorPreset.LightTheme);
                break;
            case 'dark':
                setTheme(ThemedColorPreset.DarkTheme);
                break;
            default:
                setTheme(ThemedColorPreset.LightTheme);
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

export const useCustomTheme = ()=>{
    let ctx = useContext(ThemeContext);
    if(!ctx)
    {
        throw new Error("No Theme context Present");
    }
    return ctx;
}

export const useThemedStyles = (styleFn: (theme: any) => any) => {
  const { theme } = useContext(ThemeContext);
  return useMemo(
    () => ScaledSheet.create(styleFn(theme)), [theme]
  );
}