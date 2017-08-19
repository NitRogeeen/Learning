const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// require('babel-register');

let mainWindow = null;

app.on('ready', () => {
    //Define Mainwindow
    mainWindow = new BrowserWindow(
        {
            width: 600,
            height: 400,
            frame: false
        }
    );

    //read mainHTML
    mainWindow.loadURL('File://' + __dirname + '/index.html');

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});