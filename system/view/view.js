const ipc = require('electron').ipcRenderer;
module.exports = function()
{
    var t = {};        

    t.elementEvent = function(eventType, elementId, messageObj, cb=null, messageData=null)
    {       
        document.getElementById(elementId).addEventListener(eventType, () => 
        {            
            if (typeof messageData === 'function') 
            {
                messageObj.data = messageData();
            }   

            function _sendMessage()
            {
                var reply = ipc.send('async-message', JSON.stringify(messageObj));

                var msgId = null; 
                if (messageObj.model)
                {
                    msgId = messageObj.model;  
                }
                else if (messageObj.view)
                {
                    msgId = messageObj.view;                 
                }
                else if (messageObj.system)
                {
                    msgId = messageObj.system;                 
                }

                return msgId;
            }
            
            if (cb)
            {
                var msgId = _sendMessage();

                ipc.on('async-reply', (event, args) => 
                {   
                    //console.log('ids', msgId, args);
                    
                    if (msgId = args.id)
                    {                        
                        cb(args);   
                    }   
                });  
            }
            else
            {
                _sendMessage();           
            }           
        });  
    } 


    
    return t;
}

