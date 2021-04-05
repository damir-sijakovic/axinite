
module.exports = function(msg)
{
    msg = JSON.parse(msg);
        
    // change controller
    if (msg.controller) 
    {
        Application.system.controller.load(msg.controller);
        return true;    
    }
    
    // change view in controller
    if (msg.view)
    {
        if (typeof Application.session.currentControllerData[msg.view] === 'function')
        {
            return Application.session.currentControllerData[msg.view](msg.view);             
        }
        else
        {
            Application.system.error('message.js: Controller "'+ Application.session.currentController +'/server.js" have no method named: "' + msg.view + '".');
            return null;
        }

    }
    
    // model, crud
    if (msg.model)
    {        
        return 'model-message';    
    }
    
    // command.js
    if (msg.system)
    {
        if (typeof Application.system.command[msg.system] === 'function')
        {
            if (msg.data)
            {
                return Application.system.command[msg.system](msg.data);
            }
            return Application.system.command[msg.system]();
        }

        Application.system.error('message(): "command.js" have no method named: "' + msg.system + '" found.');
        return null;
    }    
    
    return null;
}

