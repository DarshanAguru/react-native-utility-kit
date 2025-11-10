### Theming

Wrap your app with `ThemeProvider` to enable light/dark/System Default themes and persist user preference:

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "your-package/context";
import { ThemedColorPreset } from "your-package/themes";

export function Root() {
  return (
    <ThemeProvider
      storage={AsyncStorage}
      storageType="async"
      Themes={ThemedColorPreset}
    >
      <App />
    </ThemeProvider>
  );
```

---

Use `useCustomTheme` to read the active theme and switch modes:

```jsx

const { theme, setTheme, themeMode } = useCustomTheme();
setTheme("dark"); // or "light" | "systemDefault"
```

⚠️ Hooks must be used under ThemeProvider, otherwise an error is thrown.

---

Create theme-aware styles with `useThemedStyles`:

```jsx
const styles = useThemedStyles((t) => ({
  container: { backgroundColor: t.backgroundColor, padding: '16@s' },
  text: { color: t.textColor }
  // more styles
  }));
```

⚠️ Hooks must be used under ThemeProvider, otherwise an error is thrown.