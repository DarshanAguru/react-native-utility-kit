import type { StyleProp, ViewStyle, TextStyle } from "react-native";
import type { ThemePreset } from "../../../themes";

export type customStyleProps = Partial<ThemePreset>;
export type customStyleType = customStyleProps;
export type dirType = "rtl" | "ltr";

export interface ForgotPasswordFormProps {
    /** Callback triggered on successful form submission */
    onSubmit: (email: string) => void;
    /** Optional callback for "Back to Login" link press */
    onBackToLoginPress?: () => void;

    /** Label for the email input field */
    emailLabel?: string;
    /** Text for the main submit button */
    submitButtonText?: string;
    /** Text for the back to login link */
    backToLoginText?: string;

    /** Title or instruction text shown above the input */
    instructionText?: string;
    /** Style for the instruction text */
    instructionStyle?: StyleProp<TextStyle>;

    /** Outer container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Space between elements */
    spacing?: number;
    /** Style for the "Back to Login" link */
    linkStyle?: StyleProp<TextStyle>;

    /** Error message when email is empty */
    emailRequiredMessage?: string;

    /** Custom theme overrides */
    customStyles?: customStyleProps;
    /** Text direction */
    dir?: dirType;
    /** If true, switches between dark/light theme based on system preference when `customStyles` is missing */
    autoTheming?: boolean;
}
