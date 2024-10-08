---
title: Installation
description: A guide in my new Starlight docs site.
---



## Installation Guide

To get started with **Preactor**, follow these steps for installation and setup.

### 1. Install Preactor via Unity's Package Manager

1. Open Unity.
2. Navigate to `Window > Package Manager`.
3. Click the **+** button in the top-left corner and select **Install package from Git URL...**.
4. Enter the following Git URL:

   ``` 
   https://github.com/Rikarin/preactor.git?path=/Assets/Plugins/Preactor
   ```

This will install Preactor into your Unity project.

### 2. Initialize the Preactor Directory

After installation, you'll need to initialize the Preactor directory and set up the base npm package.

1. In the root directory of your Unity project, open a terminal and run the following commands:

    ```sh
    mkdir Preactor
    ```

   This creates a `Preactor` folder for managing the package files, including JavaScript views and other assets.

### 3. Copy Solution Files

To ensure Preactor works with your project, copy the contents of the `./Preactor/solution` directory from the Preactor Git repository into your `<Project>/Preactor` directory:

- Download or clone the repository and locate the `solution` folder.
- Copy everything from `./Preactor/solution` into `<Project>/Preactor`.

### 4. Compile JavaScript Views

You'll need to compile your JavaScript views into the Unity asset directory as `.js` files using **TypeScript**, **Tailwind CSS**, and **esbuild**.

1. Run the following command in your terminal to start the build process:

    ```sh
    npm run start
    ```

This command will compile your TypeScript views and automatically generate the necessary `.js` files inside the Unity asset directory.

### 5. Set Up Preactor in the Scene

1. In the Unity Editor, create a global object for Preactor by right-clicking in the **Hierarchy** window and selecting:

   ```plaintext
   Preactor > Preactor Global
   ```

   Preactor Global includes all of the basic js files to bridge JS with C# and run the compiled view.

2. Next, create a **Renderer Object** by right-clicking in the hierarchy of the current scene and selecting:

   ```plaintext
   Preactor > Preactor Renderer
   ```

3. Finally, import the compiled JavaScript view into the renderer object by navigating to:

   ```plaintext
   Assets/view/<Name of your View>/index.js
   ```

   This will link your Preact-based JavaScript views to Unity's UI system.

---

## Addressables Integration

**Preactor** supports Unity's Addressables system, allowing for efficient asset management and asynchronous loading. Here’s how to use it with your Preactor-rendered prefabs:

1. Place your prefab with the `Preact Renderer` component into an **Addressable Group** along with its corresponding `index.js` file.
   
2. These assets can now be packaged, distributed, and loaded asynchronously as part of your Addressables workflow.

### Benefits:
- **Seamless Updates:** With this setup, you can push game updates that include new UI views or UI changes without needing to release a new version through app distribution platforms like the App Store or Google Play.
- **Flexible Delivery:** Addressables allow your game to load only the necessary assets on-demand, optimizing performance and reducing initial download size.
