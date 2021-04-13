module.exports.createController = function () 
{
    const fs = require('fs');
    const twig = require('node-twig').renderFile;

    const config = require(__dirname + '/../config.js');
    const controllerName = process.argv[1];
    const path = config.pathSysController +'/'+ controllerName;

    if (!fs.existsSync(path)) 
    {
       // console.log('CREATE_FOLDER', config.pathSysController +'/'+ controllerName );
        var indexTemplate = fs.readFileSync(      __dirname + '/template/index.twig',{ encoding: 'utf8' });
        var modelTemplate = fs.readFileSync(      __dirname + '/template/model.js',{ encoding: 'utf8' });
        var viewTemplate = fs.readFileSync(       __dirname + '/template/view.js',{ encoding: 'utf8' });
        var controllerTemplate = fs.readFileSync( __dirname + '/template/controller.js',{ encoding: 'utf8' });

        fs.mkdirSync(path);

        twig( __dirname + '/template/index.twig', {context:{
            controllerName: controllerName
            }}, (error, template) => {  
                fs.writeFileSync(path + '/index.html', template);
        });
  

      // fs.writeFileSync(path + '/index.html',    '<h1>Hey there!</h1>');
       fs.writeFileSync(path + '/model.js',      modelTemplate);
       fs.writeFileSync(path + '/view.js',       viewTemplate);
       fs.writeFileSync(path + '/controller.js', controllerTemplate);
       
       console.log('Controller: "'+ controllerName  +'" created.');
    }
    else
    {
        console.log('ERROR: Controller already exists!');        
    }

};
    