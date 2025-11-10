
export type ThemePreset = {
  // Core/brand colors
  primaryColor: string;        // Main text color
  secondaryColor: string;      // Accent for highlights/emphasis
  borderColor: string;         // Default border
  fontFamily: string;
  fontFamilyLabel: string;

  // Backgrounds
  backgroundColor: string;     // Container/page background
  surfaceColor: string;        // Input surface background

  // Text variants
  labelColor: string;
  inputTextColor: string;
  placeholderColor: string;
  helperTextColor: string;

  // States
  focusBorderColor: string;
  errorColor: string;
  errorTextColor: string;
  disabledBackgroundColor: string;
  disabledTextColor: string;
  disabledBorderColor: string;

  // Subtle elements
  dividerColor: string;
  shadowColor: string;
};

export const ThemedColorPreset: {
  LightTheme: ThemePreset;
  DarkTheme: ThemePreset;
} = {
  LightTheme: {
    // Core
    primaryColor: "#000000",
    secondaryColor: "#111111",           // Slightly softer than pure black
    borderColor: "#1F1F1F",
    fontFamily: "System",                 // iOS/Android default (override if needed)
    fontFamilyLabel: "System",

    // Backgrounds
    backgroundColor: "#FFFFFF",
    surfaceColor: "#FFFFFF",

    // Text
    labelColor: "#111111",
    inputTextColor: "#000000",
    placeholderColor: "#7A7A7A",         // Readable, clearly distinct from content
    helperTextColor: "#4D4D4D",

    // States
    focusBorderColor: "#000000",          // Strong focus ring
    errorColor: "#000000",                // Monochrome theme: use black for border, red avoided
    errorTextColor: "#1A1A1A",
    disabledBackgroundColor: "#F2F2F2",
    disabledTextColor: "#9A9A9A",
    disabledBorderColor: "#D9D9D9",

    // Subtle
    dividerColor: "#E6E6E6",
    shadowColor: "#000000",
  },

  DarkTheme: {
    // Core
    primaryColor: "#FFFFFF",
    secondaryColor: "#F5F5F5",
    borderColor: "#FFFFFF",
    fontFamily: "System",
    fontFamilyLabel: "System",

    // Backgrounds
    backgroundColor: "#000000",
    surfaceColor: "#121212",              // Slightly elevated surface

    // Text
    labelColor: "#FFFFFF",
    inputTextColor: "#FFFFFF",
    placeholderColor: "#B3B3B3",          // Softer grey for dark bg
    helperTextColor: "#C7C7C7",

    // States
    focusBorderColor: "#FFFFFF",
    errorColor: "#FFFFFF",
    errorTextColor: "#EDEDED",
    disabledBackgroundColor: "#1A1A1A",
    disabledTextColor: "#8C8C8C",
    disabledBorderColor: "#3D3D3D",

    // Subtle
    dividerColor: "#2A2A2A",
    shadowColor: "#000000",
  },
};
