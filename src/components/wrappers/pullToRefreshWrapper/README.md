# PullToRefreshWrapper Component

The **PullToRefreshWrapper** is a utility wrapper that adds pull-to-refresh functionality to any scrollable content in React Native. It simplifies implementing refresh logic while keeping your UI clean and responsive.

---

## ✨ Features
- ✅ Adds pull-to-refresh behavior to any child content
- ✅ Customizable loader color
- ✅ Handles refresh state internally
- ✅ Works seamlessly with `react-native-gesture-handler`

---

## 📦 Installation
Ensure you have the following dependencies installed:

```bash
npm install react-native-gesture-handler react-native-size-matters
```
## 🔧 Props

| Prop                | Type         | Default       | Description                                      |
|---------------------|-------------|--------------|--------------------------------------------------|
| `onRefresh`        | `function`  | **Required** | Callback triggered when user performs refresh   |
| `children`         | `ReactNode` | **Required** | Content to render inside the scrollable area    |
| `refreshLoaderColor`| `string`    | `#000000`    | Color of the refresh loader indicator           |

## ✅ Usage Example

```jsx
import React, { useState } from "react";
import { View, Text } from "react-native";
import { PullToRefreshWrapper } from "./PullToRefreshWrapper";

const App = () => {
  const [data, setData] = useState("Initial Data");

  const handleRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setData("Data refreshed!");
  };

  return (
    <PullToRefreshWrapper onRefresh={handleRefresh} refreshLoaderColor="#4CAF50">
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18 }}>{data}</Text>
      </View>
    </PullToRefreshWrapper>
  );
};

export default App;
```