// https://www.electronjs.org/docs/api/browser-window

module.exports = function()
{
    var t = {};
        
    t.create = function()
    {
        Application.mainWindow = new Application.browserWindow({width: 1000, height: 600});  

        if (Application.config.uiShowDevTools)
        {
            Application.mainWindow.webContents.openDevTools();
        }

        if (Application.config.uiShowMenu === false)
        {
            Application.mainWindow.setMenuBarVisibility(false);
        }
              

       // Application.mainWindow.icon: __dirname + ‘/Icon/Icon.icns’

       

        Application.mainWindow.on('closed', function () 
        {
            Application.mainWindow = null;
        });
    } 
    
    t.load = function(file)
    {
        var file = 'file://' + file;          
        Application.mainWindow.loadURL(file);  
        
    } 
        
    return t;
}

