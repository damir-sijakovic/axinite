
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
        /*
            msg.view.show
            msg.view.hide
            msg.view.set
            msg.view.get            
        */        
        //Application.session.currentControllermsg.hello(msg.view);
        Application.session.currentControllerData[msg.view](msg.view);        
        return 'Message from "message.js"!';    
    }
    
    // model, crud
    if (msg.model)
    {        
        return 'model-message';    
    }
    
    if (msg.system)
    {
        /*
            msg.system.set(key,val)
            msg.system.get(key)        
        */
        return 'system-message';    
    }    
    
    return null;
}

