# 📧 ForgotPasswordForm

A simple, beautifully designed form for handling password resets. It features an email input field, instruction text, and easy navigation back to the login screen. It inherently supports the application's global theme and RTL configurations.

It leverages the primary `Input` and `Button` components from the utility kit.

---

## 🚀 Usage

```tsx
import { ForgotPasswordForm } from 'react-native-utility-kit';
import { Alert } from 'react-native';

const handleReset = (email) => {
  Alert.alert("Password Reset", `Link sent to ${email}`);
};

<ForgotPasswordForm
  onSubmit={handleReset}
  onBackToLoginPress={() => console.log("Navigate to Login")}
  emailLabel="Registered Email"
  submitButtonText="Send Reset Link"
  instructionText="Please provide your registered email below."
  autoTheming
/>
```

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(email: string) => void` | **Required** | Callback triggered on successful form submission. |
| `onBackToLoginPress` | `() => void` | `undefined` | Optional callback for the "Back to Login" link. |
| `emailLabel` | `string` | `"Email Address"` | Label text for the email input. |
| `submitButtonText` | `string` | `"Send Reset Link"` | Text for the submit button. |
| `backToLoginText` | `string` | `"Back to Login"` | Text for the back to login link. |
| `instructionText` | `string` | `"Enter your email address..."` | Title or instruction text shown above the input. |
| `emailRequiredMessage` | `string` | `"Email is required"` | Error message shown if email is empty. |
| `customStyles` | `Partial<ThemePreset>` | `undefined` | Custom theme override object. |
| `autoTheming` | `boolean` | `false` | Adapts to device dark/light theme automatically if no `customStyles` is provided. |
| `dir` | `"ltr" \| "rtl"` | `"ltr"` | Direction for the layout (supports Arabic/Hebrew setups). |
