const ipc = require('electron').ipcRenderer;
var replyDiv = document.getElementById('reply')
var view = require('./../../../system/view.js')();


document.getElementById('msg-controller-about').addEventListener('click', () => 
{
    ipc.sendSync('sync-message', JSON.stringify({
        controller:'about'
    }));
});

document.getElementById('msg-controller-home').addEventListener('click', () => 
{
    ipc.sendSync('sync-message', JSON.stringify({
        controller:'home'
    }));
});


document.getElementById('msg-model-add').addEventListener('click', () => 
{
    var inputData = {};

    inputData.first_name = document.getElementById('input-first-name').value;
    inputData.last_name = document.getElementById('input-last-name').value;
    inputData.email = document.getElementById('input-email').value;

    var reply = ipc.sendSync('sync-message', JSON.stringify
    ({
        model: 'add',
        data: inputData,
    }));
    
    document.getElementById('modalDivBody').innerHTML = reply;
    document.getElementById('modalDiv').style.display = 'block';  
        
});


document.getElementById('msg-model-list').addEventListener('click', () => 
{
    var reply = ipc.send('async-message', JSON.stringify({
        model: 'getData'
    }));
});


ipc.on('async-reply', (event, args) => 
{
  
    document.getElementById('modalDivBody').innerHTML = JSON.stringify(args);
    document.getElementById('modalDiv').style.display = 'block';  
});
   

/*

view.asyncMsgEvent('click', elemId, {model:'getData'}, function(data, error){
    if (error)
    {        
    }
    document.getElementById('targetId').innerHTML = data;
});


*/







