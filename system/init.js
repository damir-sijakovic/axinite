/*    ___           ___                        ___                                     ___     
     /\  \         /|  |                      /\  \                                   /\__\    
    /::\  \       |:|  |         ___          \:\  \       ___           ___         /:/ _/_   
   /:/\:\  \      |:|  |        /\__\          \:\  \     /\__\         /\__\       /:/ /\__\  
  /:/ /::\  \   __|:|__|       /:/__/      _____\:\  \   /:/__/        /:/  /      /:/ /:/ _/_ 
 /:/_/:/\:\__\ /::::\__\_____ /::\  \     /::::::::\__\ /::\  \       /:/__/      /:/_/:/ /\__\
 \:\/:/  \/__/ ~~~~\::::/___/ \/\:\  \__  \:\~~\~~\/__/ \/\:\  \__   /::\  \      \:\/:/ /:/  /
  \::/__/          |:|~~|      ~~\:\/\__\  \:\  \        ~~\:\/\__\ /:/\:\  \      \::/_/:/  / 
   \:\  \          |:|  |         \::/  /   \:\  \          \::/  / \/__\:\  \      \:\/:/  /  
    \:\__\         |:|__|         /:/  /     \:\__\         /:/  /       \:\__\      \::/  /   
     \/__/         |/__/          \/__/       \/__/         \/__/         \/__/       \/__/  
    AXINITE - ELECTRON FRAMEWORK
*/

global["Application"] = require('./application.js');
Application.config = require('./config.js');
Application.onload = require('./onload.js');

Application.electron = require('electron');
Application.electronApp = Application.electron.app;
Application.browserWindow = Application.electron.BrowserWindow;
Application.ipc = Application.electron.ipcMain;

Application.sqlite = require('sqlite3').verbose();

Application.system.window = require('./window.js')();
Application.system.controller = require('./controller.js')();
Application.system.message = require('./message.js');

Application.system.command = require('./command.js')();
Application.system.error = require('./error.js');


Application.electronApp.on('ready', function()
{
    Application.onload();
});

Application.electronApp.on('window-all-closed', function () 
{
    if (process.platform !== 'darwin') 
    {
        Application.electronApp.quit();
    }
});


Application.electronApp.on('activate', function () 
{
    if (Application.mainWindow === null) 
    {
        Application.system.window.create();    
    }
});


Application.ipc.on('sync-message', (event, args) => 
{
   event.returnValue = Application.system.message(args);
   
});

