# 🔐 LoginForm

A fully responsive, theme-aware, and highly customizable login form component. It comes out-of-the-box with email and password fields, validation logic, and optional "Forgot Password" or "Register" links.

It leverages the primary `Input` and `Button` components from the utility kit, ensuring it inherits all theme styles naturally.

---

## 🚀 Usage

```tsx
import { LoginForm } from 'react-native-utility-kit';
import { Alert } from 'react-native';

const handleLogin = (email, password) => {
  Alert.alert("Login Attempt", `Email: ${email}\nPassword: ${password}`);
};

<LoginForm
  onSubmit={handleLogin}
  onForgotPasswordPress={() => console.log("Navigate to Forgot Password")}
  onRegisterPress={() => console.log("Navigate to Register")}
  emailLabel="Email Address"
  passwordLabel="Your Password"
  submitButtonText="Sign In"
  autoTheming
/>
```

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(email: string, password: string) => void` | **Required** | Callback triggered on successful form submission. |
| `onForgotPasswordPress` | `() => void` | `undefined` | Optional callback for the "Forgot Password" link. |
| `onRegisterPress` | `() => void` | `undefined` | Optional callback for the "Register" link. |
| `emailLabel` | `string` | `"Email"` | Label text for the email input. |
| `passwordLabel` | `string` | `"Password"` | Label text for the password input. |
| `submitButtonText` | `string` | `"Login"` | Text for the submit button. |
| `forgotPasswordText` | `string` | `"Forgot Password?"` | Text for the forgot password link. |
| `registerText` | `string` | `"Create an Account"` | Text for the register link. |
| `emailRequiredMessage` | `string` | `"Email is required"` | Error message shown if email is empty. |
| `passwordRequiredMessage` | `string` | `"Password is required"` | Error message shown if password is empty. |
| `customStyles` | `Partial<ThemePreset>` | `undefined` | Custom theme override object. |
| `autoTheming` | `boolean` | `false` | Adapts to device dark/light theme automatically if no `customStyles` is provided. |
| `dir` | `"ltr" \| "rtl"` | `"ltr"` | Direction for the layout (supports Arabic/Hebrew setups). |
