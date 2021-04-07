const ipc = require('electron').ipcRenderer;
var replyDiv = document.getElementById('reply')


document.getElementById('msg-controller-home').addEventListener('click', () => 
{
    var reply = ipc.sendSync('sync-message', JSON.stringify({
        controller:'home'
    }));

});

document.getElementById('msg-controller-model').addEventListener('click', () => 
{
    var reply = ipc.sendSync('sync-message', JSON.stringify({
        controller:'model'
    }));

});


document.getElementById('msg-view-hello').addEventListener('click', () => 
{
    var reply = ipc.sendSync('sync-message', JSON.stringify({
        view:'hello'
    }));
    
    document.getElementById('modalDivBody').innerHTML = reply;
    document.getElementById('modalDiv').style.display = 'block';      
    
});

