import React, { useState } from "react";
import { View, TouchableOpacity, useColorScheme, Text } from "react-native";
import { getLoginFormStyles } from "./loginForm.styles";
import type { LoginFormProps } from "./types";
import { ThemedColorPreset } from "../../../themes";
import { Input } from "../../textComponents/textInput";
import { Button } from "../../touchableComponents/button";

/**
 * LoginForm
 *
 * A fully styled and configurable login form leveraging the internal `Input` and `Button` components.
 * Automatically validates required fields on submission before triggering the `onSubmit` callback.
 * Theme-aware and supports RTL layouts.
 *
 * @component
 * @example
 * <LoginForm
 *   onSubmit={(email, password) => console.log('Login with', email, password)}
 *   onForgotPasswordPress={() => navigate('ForgotPassword')}
 *   onRegisterPress={() => navigate('Register')}
 *   autoTheming
 * />
 */
export const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
    onForgotPasswordPress,
    onRegisterPress,
    emailLabel = "Email",
    passwordLabel = "Password",
    submitButtonText = "Login",
    forgotPasswordText = "Forgot Password?",
    registerText = "Create an Account",
    containerStyle,
    inputSpacing = 16,
    linkStyle,
    emailRequiredMessage = "Email is required",
    passwordRequiredMessage = "Password is required",
    customStyles,
    dir = "ltr",
    autoTheming = false,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

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

    const styles = getLoginFormStyles(activeStyles, dir);

    const handleSubmit = () => {
        let isValid = true;
        setEmailError("");
        setPasswordError("");

        if (!email.trim()) {
            setEmailError(emailRequiredMessage);
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError(passwordRequiredMessage);
            isValid = false;
        }

        if (isValid) {
            onSubmit(email, password);
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.inputContainer, { marginBottom: inputSpacing }]}>
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

            <View style={styles.inputContainer}>
                <Input
                    label={passwordLabel}
                    value={password}
                    onChangeText={(t) => {
                        setPassword(t);
                        if (passwordError) setPasswordError("");
                    }}
                    placeholder={`Enter your ${passwordLabel.toLowerCase()}`}
                    secureTextEntry
                    customStyles={activeStyles}
                    dir={dir}
                    errorMessage={passwordError}
                />
            </View>

            {(onForgotPasswordPress || onRegisterPress) && (
                <View style={styles.actionContainer}>
                    {onRegisterPress ? (
                        <TouchableOpacity onPress={onRegisterPress}>
                            <Text style={[styles.linkText, linkStyle]}>{registerText}</Text>
                        </TouchableOpacity>
                    ) : (
                        <View />
                    )}

                    {onForgotPasswordPress && (
                        <TouchableOpacity onPress={onForgotPasswordPress}>
                            <Text style={[styles.linkText, linkStyle]}>{forgotPasswordText}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            <View style={styles.buttonContainer}>
                <Button
                    title={submitButtonText}
                    onPress={handleSubmit}
                    backgroundColor={activeStyles?.primaryColor}
                    textColor={activeStyles?.backgroundColor || "#fff"}
                    style={{ width: "100%" }}
                />
            </View>
        </View>
    );
};
