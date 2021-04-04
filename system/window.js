// https://www.electronjs.org/docs/api/browser-window

module.exports = function()
{
    var t = {};
        
    t.create = function()
    {
        Application.mainWindow = new Application.browserWindow({width: 800, height: 600});  
        Application.mainWindow.setMenuBarVisibility(false);
        
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
