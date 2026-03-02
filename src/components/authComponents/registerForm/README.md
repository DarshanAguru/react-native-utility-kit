# 📝 RegisterForm

A fully responsive, theme-aware, and highly customizable registration form component. It includes fields for Name, Email, Password, and Confirm Password with built-in validation (including password matching checks).

It leverages the primary `Input` and `Button` components from the utility kit, ensuring it inherits all theme styles cleanly.

---

## 🚀 Usage

```tsx
import { RegisterForm } from 'react-native-utility-kit';
import { Alert } from 'react-native';

const handleRegister = (name, email, password) => {
  Alert.alert("Registration Success", `Welcome ${name}!`);
};

<RegisterForm
  onSubmit={handleRegister}
  onLoginPress={() => console.log("Navigate to Login")}
  nameLabel="Full Name"
  emailLabel="Email Address"
  passwordLabel="Create Password"
  confirmPasswordLabel="Confirm Password"
  submitButtonText="Sign Up"
  autoTheming
/>
```

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(name: string, email: string, password: string) => void` | **Required** | Callback triggered on successful form submission. |
| `onLoginPress` | `() => void` | `undefined` | Optional callback for the "Login" link. |
| `nameLabel` | `string` | `"Full Name"` | Label text for the name input. |
| `emailLabel` | `string` | `"Email"` | Label text for the email input. |
| `passwordLabel` | `string` | `"Password"` | Label text for the password input. |
| `confirmPasswordLabel` | `string` | `"Confirm Password"` | Label text for the confirm password input. |
| `submitButtonText` | `string` | `"Create Account"` | Text for the submit button. |
| `loginText` | `string` | `"Already have an account? Login"` | Text for the login link. |
| `nameRequiredMessage` | `string` | `"Name is required"` | Error message shown if name is empty. |
| `emailRequiredMessage` | `string` | `"Email is required"` | Error message shown if email is empty. |
| `passwordRequiredMessage` | `string` | `"Password is required"` | Error message shown if password is empty. |
| `passwordMismatchMessage` | `string` | `"Passwords do not match"` | Error message shown if passwords do not match. |
| `customStyles` | `Partial<ThemePreset>` | `undefined` | Custom theme override object. |
| `autoTheming` | `boolean` | `false` | Adapts to device dark/light theme automatically if no `customStyles` is provided. |
| `dir` | `"ltr" \| "rtl"` | `"ltr"` | Direction for the layout (supports Arabic/Hebrew setups). |
