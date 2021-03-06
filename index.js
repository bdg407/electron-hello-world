const path = require("path");
const { app, BrowserWindow } = require('electron');

let mainWindow;

function onClosed() {
    mainWindow = null;
}

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 640,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation : false
        }
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', onClosed);

}

app.on('window-all-closed', () => {
    app.quit();
})

app.on('activate', () => {

    if(!mainWindow) {
        createWindow();
    }

})

app.on('ready', () => {

    createWindow();

})