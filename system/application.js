// APP STRUCT

module.exports = 
{
    config: null,
    
    system: {
        window: null,
        controller: null,
        error: null,
        message: null,
        amessage: null,
        command: null,
        model: null,
    },
    
    libs: {
        fakeLibName: null,
    },
    
    session: {
        currentController: null, 
        currentModel: null,
        currentName: null,
        currentPath: null,        
    },
    
    onload: null,
    electron: null,
    electronApp: null,
    browserWindow: null,
    mainWindow: null,
    ipc: null,    
    sqlite: null,
    fs : null,
    db: null,
    
}
