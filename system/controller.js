const fs = require('fs');

module.exports = function()
{
    var t = {};
      
    t.load = function(controller, params=null)
    {
        var file = Application.config.pathSysController + '/' + controller + '/index.html';
        
            if (fs.existsSync(file)) 
            {
                Application.session.currentPath = Application.config.pathSysController + '/' + controller + '/';
                Application.session.currentName = controller;
                if (params)
                {
                    file = file +'?'+ params;
                }
                
                var controllerData = Application.config.pathSysController + '/' + controller + '/controller.js';  
                if (fs.existsSync(controllerData)) 
                {
                    Application.session.currentController = require(controllerData)(); 
                }
                
                var modelData = Application.config.pathSysController + '/' + controller + '/model.js';  
                if (fs.existsSync(modelData)) 
                {
                    Application.session.currentModel = require(modelData)(); 
                }
                
                    
                Application.system.window.load(file);
            }
            else
            {
                //Application.system.controller.showMessage({title:'Error', body:'Bad controller name!', color:'red'});
                 Application.system.error('controller.load(): No controller named: "' + controller + '" found.');
            }
        
    }
       
    
    t.showMessage = function(params)
        {
            //var file = 'file://' + arg_config.pathSysController + '/' + controller + '/index.html?hello=world';     
            var file = Application.config.pathSysTemplates + '/message.html';  
            
            if (fs.existsSync(file)) 
            {
                var pairs = [];

                for (var prop in params) {
                if (params.hasOwnProperty(prop)) {
                    var k = encodeURIComponent(prop),
                        v = encodeURIComponent(params[prop]);
                    pairs.push( k + "=" + v);
                }
                }

                if (pairs.length > 0)
                {
                    var urlstr = "?" + pairs.join("&");
                    file = file + urlstr;
                }

                Application.system.window.load(file);
            }
            else
            {
                Application.system.error('ERROR: No template file found in "system/templates".');
            }
            
        }
        
    return t;
}


