const { app, BrowserWindow, Menu } = require('electron')
var path = require("path")

function createWindow() {

  // Create the Browser Window
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'), // set icon
    frame: 0,
    webPreferences: {
      nodeIntegration: true
    }
  })


  // Load Index
  win.loadFile('app/index.html')

}

// Create Window
Menu.setApplicationMenu(null);
app.on('ready', createWindow)

// If Closed ... Clean!
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// If Null... Open!
app.on('activate', function () {
  if (mainWindow === null) createWindow()
})