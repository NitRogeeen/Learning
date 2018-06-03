/* @flow */
import { BrowserWindow, app } from 'electron';
import path from 'path';
import url from 'url';

let win: BrowserWindow;

class Main {
    loadUrl: string;
    
    constructor() {
        this.loadUrl = this.getLoadUrl('./dist');
        this.initialize();
    }

    getLoadUrl(rootPath: string): string {
        return url.format({
            protocol: 'file',
            pathname: path.join(path.resolve(rootPath), 'index.html'),
            slashes: true
        })
    }

    //create window
    ready(): void {
        win = new BrowserWindow({
            width: 500,
            height: 500,
            x: 0,
            y: 0,
            webPreferences: {
                nodeIntegration: false,
                webviewTag: false
            }
        });

        //win.webContents/openDevTools();

        win.on('closed', () => {win = null;});
        win.loadURL(this.loadUrl);
    }

    activate(): void {
        if (win == null) {
            this.ready();
        }
    }

    windowAllClosed(): void {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    }

    initialize(): void {
        app.on('ready', () => this.ready());
        app.on('activate', () => this.activate());
        app.on('window-all-closed', () => this.windowAllClosed());
    }
}

new Main();