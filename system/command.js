// MESSAGE CONTROLLED COMMANDS 

module.exports = function()
{
    var t = {};
        
    t.exit = function()
    {
        console.log('Application terminated...');  
        Application.electronApp.quit();
    }   
        
    return t;
}

