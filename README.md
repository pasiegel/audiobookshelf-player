# Audiobookshelf-player

This is an **Electron wrapper** for the **Audiobookshelf** web app. It allows users to enter the server URL of their Audiobookshelf instance and wraps the web interface into a native desktop application for Windows.

---

## Features

- **Customizable Server URL**: Upon launch, the app asks for the Audiobookshelf server URL if it hasn't been set.
- **Persistent Configuration**: The server URL is stored in a `config.json` file in the local directory, so users don’t need to enter it every time.
- **Taskbar Icon**: The app uses a custom `.ico` icon for the taskbar and the window.
- **Cross-Platform**: While currently built for Windows, the app can be easily extended to support other platforms (macOS, Linux).

---

## Prerequisites

Before using this project, you need to install:

### 1. **Node.js and npm**

Download and install Node.js from the official website:

👉 https://nodejs.org/

> This will also install **npm** (Node Package Manager), which is required to install dependencies.

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/audiobookshelf-wrapper.git
cd audiobookshelf-wrapper
```

### 2. **Install dependencies**

Run the following command to install Electron and other required packages:

```bash
npm install
```

This installs **Electron** and **Electron Packager** as development dependencies.

---

## Development

### 1. **Run the application in development mode**

To start the app with Electron:

```bash
npm start
```

This launches the Electron app where you can enter the Audiobookshelf server URL.

### 2. **Package the application**

To build the app into a native Windows executable:

```bash
npm run package
```

This will create a `.exe` file in the `dist/` folder.

---

## Configuration

The app stores the server URL in a **`config.json`** file located in a `config/` directory in the project. This ensures that the server URL is persisted across sessions.

### Default Location for Config File:
- **Windows**: `audiobookshelf-wrapper/config/config.json`

---

## Files

- `main.js`: Main Electron process script that handles window creation and server URL management.
- `index.html`: HTML file for the initial URL input prompt.
- `store.js`: Handles reading and writing configuration settings (such as server URL) to a local `config.json` file.
- `icon.ico`: The application icon used for both the window and packaged `.exe` file.
- `package.json`: Project dependencies, scripts, and configuration for Electron and Electron Packager.
- `preload.js`: Preload script for isolating and controlling access to Electron's APIs in the renderer process.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Troubleshooting

1. **App doesn’t save the URL**: Ensure that the `config.json` file exists in the `config/` directory. If it’s missing, the app will create it automatically on the first run.
2. **App doesn’t launch**: Make sure that you have all dependencies installed using `npm install`. If any errors occur, try running `npm start` again to debug.
3. **Icon not showing**: Ensure that your icon is in `.ico` format and placed in the project root.
