require('dotenv').config();

const { app, BrowserWindow } = require('electron');
const path = require('path');

const devServer = `${process.env.DEV_HOST}:${process.env.DEV_PORT}/`;
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

app.allowRendererProcessReuse = false;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(devServer);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
};

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
