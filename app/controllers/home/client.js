const ipc = require('electron').ipcRenderer;
var replyDiv = document.getElementById('reply')



document.getElementById('msg-controller-about').addEventListener('click', () => 
{
    var reply = ipc.sendSync('sync-message', JSON.stringify({
        controller:'about'
    }));
  //  replyDiv.innerHTML = reply;
});


document.getElementById('msg-view-hello').addEventListener('click', () => 
{
    var reply = ipc.sendSync('sync-message', JSON.stringify({
        view:'hello'
    }));
    //replyDiv.innerHTML = reply;
    
    document.getElementById('modalDivBody').innerHTML = reply;
    document.getElementById('modalDiv').style.display = 'block';  
    
    
});




