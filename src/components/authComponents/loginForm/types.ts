import type { StyleProp, ViewStyle, TextStyle } from "react-native";
import type { ThemePreset } from "../../../../themes";

export type customStyleProps = Partial<ThemePreset>;
export type customStyleType = customStyleProps;
export type dirType = "rtl" | "ltr";

export interface LoginFormProps {
  /** Callback triggered on successful form submission */
  onSubmit: (email: string, password: string) => void;
  /** Optional callback for "Forgot Password" link press */
  onForgotPasswordPress?: () => void;
  /** Optional callback for "Register" link press */
  onRegisterPress?: () => void;

  /** Label for the email input field */
  emailLabel?: string;
  /** Label for the password input field */
  passwordLabel?: string;
  /** Text for the main submit button */
  submitButtonText?: string;
  /** Text for the forgot password link */
  forgotPasswordText?: string;
  /** Text for the register link */
  registerText?: string;

  /** Outer container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Space between input fields */
  inputSpacing?: number;
  /** Style for the "Forgot Password" or "Register" links */
  linkStyle?: StyleProp<TextStyle>;

  /** Required error message for empty email on submit */
  emailRequiredMessage?: string;
  /** Required error message for empty password on submit */
  passwordRequiredMessage?: string;

  /** Custom theme overrides */
  customStyles?: customStyleProps;
  /** Text direction */
  dir?: dirType;
  /** If true, switches between dark/light theme based on system preference when `customStyles` is missing */
  autoTheming?: boolean;
}
