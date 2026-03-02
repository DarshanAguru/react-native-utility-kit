import React, { useState } from "react";
import { View, TouchableOpacity, useColorScheme, Text } from "react-native";
import { getForgotPasswordFormStyles } from "./forgotPasswordForm.styles";
import type { ForgotPasswordFormProps } from "./types";
import { ThemedColorPreset } from "../../../../themes";
import { Input } from "../../textComponents/textInput";
import { Button } from "../../touchableComponents/button";

/**
 * ForgotPasswordForm
 *
 * A fully styled and configurable "Forgot Password" form.
 * Leverages the internal `Input` and `Button` components to gather an email address for password resets.
 * Includes validation, instructions, and navigation hooks.
 * Theme-aware and supports RTL layouts.
 *
 * @component
 * @example
 * <ForgotPasswordForm
 *   onSubmit={(email) => console.log('Reset link sent to', email)}
 *   onBackToLoginPress={() => navigate('Login')}
 *   autoTheming
 * />
 */
export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
    onSubmit,
    onBackToLoginPress,
    emailLabel = "Email Address",
    submitButtonText = "Send Reset Link",
    backToLoginText = "Back to Login",
    instructionText = "Enter your email address and we will send you a link to reset your password.",
    instructionStyle,
    containerStyle,
    spacing = 24,
    linkStyle,
    emailRequiredMessage = "Email is required",
    customStyles,
    dir = "ltr",
    autoTheming = false,
}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    let activeStyles = customStyles;

    if (!activeStyles) {
        if (autoTheming) {
            const systemTheme = useColorScheme();
            activeStyles =
                systemTheme === "dark"
                    ? ThemedColorPreset.DarkTheme
                    : ThemedColorPreset.LightTheme;
        } else {
            activeStyles = ThemedColorPreset.LightTheme;
        }
    }

    const styles = getForgotPasswordFormStyles(activeStyles, dir);

    const handleSubmit = () => {
        let isValid = true;
        setEmailError("");

        if (!email.trim()) {
            setEmailError(emailRequiredMessage);
            isValid = false;
        }

        if (isValid) {
            onSubmit(email);
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {instructionText ? (
                <Text style={[styles.instructionText, instructionStyle]}>
                    {instructionText}
                </Text>
            ) : null}

            <View style={[styles.inputContainer, { marginBottom: spacing }]}>
                <Input
                    label={emailLabel}
                    value={email}
                    onChangeText={(t) => {
                        setEmail(t);
                        if (emailError) setEmailError("");
                    }}
                    placeholder={`Enter your ${emailLabel.toLowerCase()}`}
                    customStyles={activeStyles}
                    dir={dir}
                    keyboarType="email-address"
                    errorMessage={emailError}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title={submitButtonText}
                    onPress={handleSubmit}
                    backgroundColor={activeStyles?.primaryAccent}
                    textColor={activeStyles?.buttonTextColor || "#fff"}
                    style={{ width: "100%" }}
                />
            </View>

            {onBackToLoginPress && (
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={onBackToLoginPress}>
                        <Text style={[styles.linkText, linkStyle]}>{backToLoginText}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
