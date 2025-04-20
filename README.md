# Preactor

<div align="center">
  <img src="docs/src/assets/logo.png" alt="Preactor Logo" width="200" />
  <h3>Modern Web Development for Unity UI</h3>
  <p>Build reactive, component-based UIs in Unity with Preact and TailwindCSS</p>

  [![Unity Version](https://img.shields.io/badge/Unity-6.0%2B-blue.svg)](https://unity.com/)
  [![License](https://img.shields.io/badge/License-Apache-green.svg)](LICENSE)
  [![Documentation](https://img.shields.io/badge/Documentation-Website-orange.svg)](https://preactor.rikarin.io/)
  [![Discord](https://img.shields.io/discord/1363033493075922954)](https://discord.gg/pgnTGv3GbH)
</div>

## 🚀 Overview

**Preactor** is a revolutionary toolkit that bridges the gap between modern web development and Unity game development, empowering you to create stunning, responsive user interfaces with unprecedented ease and flexibility.

By bringing **Preact** (a fast 3kB alternative to React) and **Tailwind CSS** (a utility-first CSS framework) into the Unity ecosystem, Preactor transforms how you approach UI development in your games and applications.

## ✨ Features

### 🧩 Modern Component-Based Architecture
- Build reusable, modular UI components
- Implement reactive interfaces that update automatically when data changes
- Organize your UI code more logically and maintainably
- Leverage the familiar JSX-like syntax that web developers love

### 🎨 Effortless Styling with Tailwind CSS
- Access thousands of utility classes for instant styling
- Maintain consistent design language across your entire project
- Implement responsive designs that work across different screen sizes
- Customize your UI without writing a single line of CSS

### ⚡ Streamlined Development Workflow
- Hot reloading capabilities for instant feedback
- TypeScript support for type safety and better tooling
- Efficient compilation through esbuild
- Seamless integration with Unity's existing systems

### 🔄 Unity Addressables Integration
- Load UI components asynchronously for better performance
- Update your UI without requiring a full app update
- Optimize memory usage by loading only what you need
- Implement dynamic content updates post-release

## 📋 Prerequisites

Before installing Preactor, ensure you have:

- Unity 6000.0 or newer
- Node.js 14+ and npm installed on your development machine
- Basic familiarity with Unity's Package Manager
- Git installed (for package installation)

## 🔧 Installation

### 1. Install Preactor via Unity's Package Manager

1. Open Unity.
2. Navigate to `Window > Package Manager`.
3. Click the **+** button in the top-left corner and select **Install package from Git URL...**.
4. Enter the following Git URL:

   ```
   https://github.com/Rikarin/preactor.git?path=/Assets/Plugins/Preactor
   ```

### 2. Initialize the Preactor Directory

After installation, initialize the Preactor directory:

```sh
mkdir Preactor
```

### 3. Copy Solution Files

Copy the contents of the `./Preactor/solution` directory from the Preactor Git repository into your `<Project>/Preactor` directory.

### 4. Compile JavaScript Views

Compile your JavaScript views with:

```sh
pnpm run start
```

### 5. Set Up Preactor in the Scene

1. Create a global object: `Preactor > Preactor Global`
2. Create a renderer object: `Preactor > Preactor Renderer`
3. Import your compiled JavaScript view into the renderer object

## 💻 Usage Example

Here's a simple example of a button component in Preactor:

```tsx
import Button from './Button';

function SaveButton() {
  return (
    <Button 
      variant="default"
      color="green"
      onClick={() => saveData()}
    >
      Save
    </Button>
  );
}

// Different button variants
function ButtonVariants() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="small">Small</Button>
      <Button variant="icon">🔍</Button>
    </div>
  );
}
```

## 🌟 Benefits

### For Game Developers
- **Reduced Development Time**: Build complex UIs in a fraction of the time
- **Improved Iteration Speed**: Make changes quickly and see results instantly
- **Better Collaboration**: Allow web developers to contribute directly to your game UI
- **Future-Proof Skills**: Use technologies that are widely adopted in the broader development community

### For Studios
- **Consistent UI**: Maintain design consistency across multiple projects
- **Easier Onboarding**: Leverage widely-known web technologies to reduce training time
- **Flexible Updates**: Push UI changes without requiring full app updates
- **Cross-Platform Excellence**: Create responsive UIs that work beautifully across all platforms

## 📚 Documentation

For comprehensive documentation, visit our [Documentation Website](https://preactor.rikarin.io/).

- [Getting Started](https://preactor.rikarin.io/getting-started/what-is-this/)
- [Examples](https://preactor.rikarin.io/examples/button/)
- [API Reference](https://preactor.rikarin.io/reference/puerts/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [OneJS](https://assetstore.unity.com/packages/tools/gui/onejs-221317) - For the original idea of using Preact in Unity
- [Preact](https://preactjs.com/) - For providing the lightweight React alternative
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [esbuild](https://esbuild.github.io/) - For the extremely fast JavaScript bundler
- [Unity](https://unity.com/) - For the "amazing" game development platform
