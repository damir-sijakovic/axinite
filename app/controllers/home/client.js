const ipc = require('electron').ipcRenderer;
var replyDiv = document.getElementById('reply')



document.getElementById('msg-controller-about').addEventListener('click', () => 
{
    ipc.sendSync('sync-message', JSON.stringify({
        controller:'about'
    }));
});


document.getElementById('msg-view-hello').addEventListener('click', () => 
{
    var reply = ipc.sendSync('sync-message', JSON.stringify({
        view:'hellor'
    }));
    
    document.getElementById('modalDivBody').innerHTML = reply;
    document.getElementById('modalDiv').style.display = 'block';  
        
});


document.getElementById('msg-system-exit').addEventListener('click', () => 
{
    ipc.sendSync('sync-message', JSON.stringify({
        system:'exit'
    }));    
});










