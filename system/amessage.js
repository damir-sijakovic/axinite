
module.exports = async function(msg)
{
    msg = JSON.parse(msg);
        
    // change controller
    if (msg.controller) 
    {
        Application.system.controller.load(msg.controller);
        return true;    
    }
    
    // call method from ./controller.js from view
    if (msg.view)
    {
        if (typeof Application.session.currentController[msg.view] === 'function')
        {
            if (msg.data)
            {
                return Application.session.currentController[msg.view](msg.data); 
            }
            return Application.session.currentController[msg.view]();             
        }
        else
        {
            Application.system.error('message.js: Controller "'+ Application.session.currentName +'/controller.js" have no method named: "' + msg.view + '".');
            return null;
        }

    }
    
    // model
    if (msg.model)
    {        
   
        if (typeof Application.session.currentModel[msg.model] === 'function')
        {
            if (msg.data)
            {               
                var modelData = await Application.session.currentModel[msg.model](msg.data);

                var comObj = Application.system.helpers.getComObject();
                comObj.id = msg.model;
                comObj.data = modelData;
                


                return comObj;
            }

            var rowsData = await Application.session.currentModel[msg.model]();

           

            var returnData = {
                error: null, 
                requestType: 'model',
                id: msg.model,                
                data: rowsData,
            };

            return returnData;       
        }
        else
        {
            Application.system.error('message.js: Model "'+ Application.session.currentName +'/model.js" have no method named: "' + msg.model + '".');
            return null;
        }
        

    }
    
    // command.js, system functions like exit etc.
    if (msg.system)
    {
        if (typeof Application.system.command[msg.system] === 'function')
        {
            if (msg.data)
            {
                return Application.system.command[msg.system](msg.data);
            }
            var data = Application.system.command[msg.system]();
            return data;
        }

        Application.system.error('message(): "command.js" have no method named: "' + msg.system + '" found.');
        return null;
    }    
    
 


    return null;
}

