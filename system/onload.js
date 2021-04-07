// EXECUTE WHEN ELECTRON APP IS READY

module.exports = function()
{
    console.log('Application started...');    
    Application.system.window.create();
    Application.system.controller.load(Application.config.appHomeController); 

    if (Application.fs.existsSync(Application.config.pathModelSchemaFile)) 
    {
        if (Application.fs.existsSync(Application.config.pathModelDbFile)) 
        {
             //.db file exists
             Application.db = new Application.sqlite.Database(Application.config.pathModelDbFile);
        }
        else
        {
            //.db file NOT exists
            var sqlData = Application.fs.readFileSync(Application.config.pathModelSchemaFile,{ encoding: 'utf8' });
            Application.db = new Application.sqlite.Database(Application.config.pathModelDbFile);
            Application.db.run(sqlData);
            Application.db.close();
        }
    }
    
}

