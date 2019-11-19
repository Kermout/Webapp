const { app, BrowserWindow, Tray } = require('electron')
const path = require('path')
const url = require('url')
let win
function createWindow() {
    const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/src/images/app.ico');
    // where public folder on the root dir

    image.setTemplateImage(true);

    console.log(appIcon, win)
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})