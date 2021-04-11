module.exports.createController = function () 
{
    const fs = require('fs');
    const config = require(__dirname + '/../config.js');
    const controllerName = process.argv[1];
    const path = config.pathSysController +'/'+ controllerName;

    if (!fs.existsSync(path)) 
    {
       // console.log('CREATE_FOLDER', config.pathSysController +'/'+ controllerName );
       fs.mkdirSync(path);
       fs.writeFileSync(path + '/index.html', 'Hey there!');
       fs.writeFileSync(path + '/model.js', 'Hey there!');
       fs.writeFileSync(path + '/view.js', 'Hey there!');
       fs.writeFileSync(path + '/controller.js', 'Hey there!');
       console.log('Controller: "'+ controllerName  +'" created.');

    }
    else
    {
        console.log('ERROR: Controller already exists!');        
    }

};
    