const { app, BrowserWindow, nativeTheme } = require('electron/main');

function homeWindow() {
    const homeWindow = new BrowserWindow({
        width: 700,
        height: 220,
        icon: './src/assets/logo.png',
        resizable: true,
        autoHideMenuBar: true,
        // titleBarStyle: 'default'

    });
    nativeTheme.themeSource = 'system';
    homeWindow.loadFile('src/html/home.html');
}

app.on('ready', () => {
    homeWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});