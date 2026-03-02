import React, { useState } from "react";
import { View, TouchableOpacity, useColorScheme, Text } from "react-native";
import { getRegisterFormStyles } from "./registerForm.styles";
import type { RegisterFormProps } from "./types";
import { ThemedColorPreset } from "../../../../themes";
import { Input } from "../../textComponents/textInput";
import { Button } from "../../touchableComponents/button";

/**
 * RegisterForm
 *
 * A fully styled and configurable registration form leveraging the internal `Input` and `Button` components.
 * Automatically validates required fields, formats, and password matching before triggering the `onSubmit` callback.
 * Theme-aware and supports RTL layouts.
 *
 * @component
 * @example
 * <RegisterForm
 *   onSubmit={(name, email, password) => console.log('Register with', name, email, password)}
 *   onLoginPress={() => navigate('Login')}
 *   autoTheming
 * />
 */
export const RegisterForm: React.FC<RegisterFormProps> = ({
    onSubmit,
    onLoginPress,
    nameLabel = "Full Name",
    emailLabel = "Email",
    passwordLabel = "Password",
    confirmPasswordLabel = "Confirm Password",
    submitButtonText = "Create Account",
    loginText = "Already have an account? Login",
    containerStyle,
    inputSpacing = 16,
    linkStyle,
    nameRequiredMessage = "Name is required",
    emailRequiredMessage = "Email is required",
    passwordRequiredMessage = "Password is required",
    passwordMismatchMessage = "Passwords do not match",
    customStyles,
    dir = "ltr",
    autoTheming = false,
}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

    const styles = getRegisterFormStyles(activeStyles, dir);

    const handleSubmit = () => {
        let isValid = true;
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        if (!name.trim()) {
            setNameError(nameRequiredMessage);
            isValid = false;
        }
        if (!email.trim()) {
            setEmailError(emailRequiredMessage);
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError(passwordRequiredMessage);
            isValid = false;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError(passwordMismatchMessage);
            isValid = false;
        }

        if (isValid) {
            onSubmit(name, email, password);
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.inputContainer, { marginBottom: inputSpacing }]}>
                <Input
                    label={nameLabel}
                    value={name}
                    onChangeText={(t) => {
                        setName(t);
                        if (nameError) setNameError("");
                    }}
                    placeholder={`Enter your ${nameLabel.toLowerCase()}`}
                    customStyles={activeStyles}
                    dir={dir}
                    errorMessage={nameError}
                />
            </View>

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

            <View style={[styles.inputContainer, { marginBottom: inputSpacing }]}>
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

            <View style={styles.inputContainer}>
                <Input
                    label={confirmPasswordLabel}
                    value={confirmPassword}
                    onChangeText={(t) => {
                        setConfirmPassword(t);
                        if (confirmPasswordError) setConfirmPasswordError("");
                    }}
                    placeholder={`Confirm your ${passwordLabel.toLowerCase()}`}
                    secureTextEntry
                    customStyles={activeStyles}
                    dir={dir}
                    errorMessage={confirmPasswordError}
                />
            </View>

            {onLoginPress && (
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={onLoginPress}>
                        <Text style={[styles.linkText, linkStyle]}>{loginText}</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.buttonContainer}>
                <Button
                    title={submitButtonText}
                    onPress={handleSubmit}
                    backgroundColor={activeStyles?.primaryAccent}
                    textColor={activeStyles?.buttonTextColor || "#fff"}
                    style={{ width: "100%" }}
                />
            </View>
        </View>
    );
};
