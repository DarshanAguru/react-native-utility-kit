# Contributing to react-native-utility-kit

Thank you for your interest in contributing! 🎉
This guide will help you set up, develop, and contribute effectively.

---

## 🛠️ Getting Started

### 1. Fork the Repository
Click **Fork** on GitHub and clone your fork locally:
```bash
git clone https://github.com/DarshanAguru/react-native-utility-kit.git
cd react-native-utility-kit
```

### 2. Install Dependencies
Use **npm** or **yarn**:
```bash
npm install
# or
yarn install
```

### 3. Run the Example App
To preview and test components:
```bash
cd example
npm install
npm start
```
You can use Expo or React Native CLI to view the example on your device/emulator.

---

## 🧱 Project Structure
```
react-native-utility-kit/
│
├── src/
│   ├── components/
│   ├── contexts/
│   ├── themes/
|   ├── utils/
│   └── index.ts
│
├── example/                # Example app using the library
├── package.json
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── README.md
```

---

## 🧩 How to Contribute

### 1. Create a New Branch
```bash
git checkout -b feature/add-new-component
```

### 2. Make Your Changes
Follow the existing code style. Each component should:
- Be written in TypeScript or clean JavaScript.
- Export from `src/index.ts`.
- Include minimal inline documentation and prop typing.

### 3. Lint and Test
```bash
npm run lint
npm test
```
If you’re adding a visual component, ensure it’s showcased in the example app.

### 4. Commit Convention
Use descriptive commit messages:
```
feat: add custom Input component
fix: correct label alignment in Label component
docs: update README usage examples
```

### 5. Push and Submit PR
```bash
git push origin feature/add-new-component
```
Then open a **Pull Request** on GitHub.
Include:
- A summary of the change
- Screenshots or GIFs (if UI-related)
- Any issues it fixes (`Fixes #123`)

---

## 🧪 Testing Guidelines
- Test components on both Android and iOS simulators.
- Prefer functional components with hooks.
- Keep external dependencies minimal.

---

## 🚀 Releasing to npm
Maintainers can release updates using:
```bash
npm run build
npm publish --access public
```
Ensure `package.json` has the correct version and entry points.

---

## 🗣️ Questions or Ideas?
Open a [GitHub Discussion](https://github.com/DarshanAguru/react-native-utility-kit/discussions)
or create an [Issue](https://github.com/DarshanAguru/react-native-utility-kit/issues) with the **enhancement** label.

---

### 💙 Thank You
Your contributions help make this library better for the entire React Native community!
