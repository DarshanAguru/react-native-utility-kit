import type { StyleProp, ViewStyle, TextStyle } from "react-native";
import type { ThemePreset } from "../../../themes";

export type customStyleProps = Partial<ThemePreset>;
export type customStyleType = customStyleProps;
export type dirType = "rtl" | "ltr";

export interface RegisterFormProps {
    /** Callback triggered on successful form submission */
    onSubmit: (name: string, email: string, password: string) => void;
    /** Optional callback for "Login" link press */
    onLoginPress?: () => void;

    /** Label for the name input field */
    nameLabel?: string;
    /** Label for the email input field */
    emailLabel?: string;
    /** Label for the password input field */
    passwordLabel?: string;
    /** Label for the confirm password input field */
    confirmPasswordLabel?: string;

    /** Text for the main submit button */
    submitButtonText?: string;
    /** Text for the login link */
    loginText?: string;

    /** Outer container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Space between input fields */
    inputSpacing?: number;
    /** Style for the "Login" link */
    linkStyle?: StyleProp<TextStyle>;

    /** Error message when name is empty */
    nameRequiredMessage?: string;
    /** Error message when email is empty */
    emailRequiredMessage?: string;
    /** Error message when password is empty */
    passwordRequiredMessage?: string;
    /** Error message when passwords do not match */
    passwordMismatchMessage?: string;

    /** Custom theme overrides */
    customStyles?: customStyleProps;
    /** Text direction */
    dir?: dirType;
    /** If true, switches between dark/light theme based on system preference when `customStyles` is missing */
    autoTheming?: boolean;
}
