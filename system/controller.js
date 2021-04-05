const fs = require('fs');

module.exports = function()
{
    var t = {};
      
    t.load = function(controller, params=null)
    {
        var file = Application.config.pathSysController + '/' + controller + '/index.html';
        
            if (fs.existsSync(file)) 
            {
                Application.session.currentControllerPath = Application.config.pathSysController + '/' + controller + '/';
                Application.session.currentController = controller;
                if (params)
                {
                    file = file +'?'+ params;
                }
                
                var serverData = Application.config.pathSysController + '/' + controller + '/server.js';  
                if (fs.existsSync(serverData)) 
                {
                    Application.session.currentControllerData = require(serverData)(); 
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


