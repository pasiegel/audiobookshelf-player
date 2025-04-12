const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const { getConfig, setConfig, configPath } = require('./store');  // Update here

let mainWindow;
let promptWindow;

function createWindow(url) {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: path.join(__dirname, 'icon.ico'),  // Icon for the window
    webPreferences: {
      nodeIntegration: false
    }
  });

  // Remove menu bar
  Menu.setApplicationMenu(null);

  mainWindow.loadURL(url);
}

function createPromptWindow() {
  promptWindow = new BrowserWindow({
    width: 400,
    height: 200,
    resizable: false,
    modal: true,
    icon: path.join(__dirname, 'icon.ico'),  // Icon for the prompt window
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  Menu.setApplicationMenu(null);

  promptWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  const savedUrl = getConfig().serverURL;  // Use getConfig() here
  if (savedUrl) {
    createWindow(savedUrl);
  } else {
    createPromptWindow();
  }
});

ipcMain.on('set-server-url', (event, url) => {
  console.log('🛰 Received URL from renderer:', url);

  if (url && typeof url === 'string' && url.startsWith('http')) {
    try {
      setConfig({ serverURL: url });  // Use setConfig() to update
      console.log('✅ Saved to config:', getConfig().serverURL);
      console.log('📁 Config file path:', configPath);
    } catch (err) {
      console.error('❌ Failed to write to config:', err);
    }

    if (promptWindow) promptWindow.close();
    createWindow(url);
  } else {
    console.warn('⚠️ Invalid URL received:', url);
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
