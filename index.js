const { app, BrowserWindow } = require('electron');

function createWindows() {
    let appWindow = new BrowserWindow({
        width: 600,
        height: 800,
        center: true,
        minWidth: 300
    });
    appWindow.loadFile('./index.html');

    appWindow.on('closed', () => {
        appWindow = null
    });

    let aboutWindow = new BrowserWindow({
        width: 300,
        height: 275,
        frame: false,
        transparent: true
    });

    aboutWindow.loadFile('./about.html');

    aboutWindow.on('closed', () => {
        aboutWindow = null
    });

    appWindow.once('ready-to-show', () => {
        appWindow.maximize();
        appWindow.show();

        setTimeout(() => {
            aboutWindow.show();
            setTimeout(() => {
                aboutWindow.hide();
            }, 5000);
        }, 1000);

    })
}

app.on('ready', createWindows);