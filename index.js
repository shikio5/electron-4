const { app, BrowserWindow, ipcMain } = require("electron");

function createWindows() {
  let appWindow = new BrowserWindow({
    width: 600,
    height: 800,
    center: true,
    minWidth: 300,
  });
  appWindow.loadFile("./index.html");

  appWindow.on("closed", () => {
    appWindow = null;
  });

  let aboutWindow = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    show: false,
  });

  aboutWindow.loadFile("./about.html");

  appWindow.once("ready-to-show", () => {
    appWindow.maximize();
    appWindow.show();

    setTimeout(() => {
      aboutWindow.show();
    }, 1000);
  });

  aboutWindow.on("closed", () => {
    aboutWindow = null;
  });

  ipcMain.on("closeInfoWindow", (event) => {
    console.log("it is called");
    aboutWindow.hide();
  });
}

app.on("ready", createWindows);
