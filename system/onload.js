// EXECUTE WHEN ELECTRON APP IS READY

module.exports = function()
{
    console.log('Application started...');    
    Application.system.window.create();

    if (process.argv[2])
    {
        var argument = process.argv[2];
        if (argument.length > 0)
        {
            var controllerName = argument.split(":")[1]; 
            Application.system.controller.load(controllerName); 
        }        
    }
    else
    {
        Application.system.controller.load(Application.config.appHomeController); 
    }
    

    if (Application.fs.existsSync(Application.config.pathModelSchemaFile)) 
    {
        if (Application.fs.existsSync(Application.config.pathModelDbFile)) 
        {
            //.db file exists
            Application.db = new Application.sqlite.Database(Application.config.pathModelDbFile, (err) => {
                if (err) {
                    console.error(err.message);
                }                     
            });
  




        }
        else
        {
            //.db file NOT exists
            var sqlData = Application.fs.readFileSync(Application.config.pathModelSchemaFile,{ encoding: 'utf8' });
            Application.db = new Application.sqlite.Database(Application.config.pathModelDbFile, (err) => {
                if (err) {
                    console.error(err.message);
                }                     
            });

            Application.db.run(sqlData, (err) => {
                if (err) 
                {
                  console.log('ERROR!', err)
                }
            });
            
        }
    }
    
}

