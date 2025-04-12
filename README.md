# Audiobookshelf Player

This is an **Electron wrapper** for the **Audiobookshelf** web app. It allows users to enter the server URL of their Audiobookshelf instance and wraps the web interface into a native desktop application for Windows.

---

## Features

- **Customizable Server URL**: Upon launch, the app asks for the Audiobookshelf server URL if it hasn't been set.
- **Persistent Configuration**: The server URL is stored in a `config.json` file in the local directory, so users don’t need to enter it every time.
- **Taskbar Icon**: The app uses a custom `.ico` icon for the taskbar and the window.
- **Cross-Platform**: While currently built for Windows, the app can be easily extended to support other platforms (macOS, Linux).

---

## Installation

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/audiobookshelf-wrapper.git
cd audiobookshelf-wrapper
