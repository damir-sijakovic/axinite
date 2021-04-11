const ipc = require('electron').ipcRenderer;
var replyDiv = document.getElementById('reply')
var view = require('./../../../system/view/view.js')();

view.elementEvent('click', 'msg-controller-about', {controller:'about'});
view.elementEvent('click', 'msg-controller-home', {controller:'home'});

/*
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
*/


view.elementEvent('click', 'msg-model-add', {model: 'add'}, 
function(a){
    document.getElementById('modalDivBody').innerHTML = JSON.stringify(a);
    document.getElementById('modalDiv').style.display = 'block';  
}, 
()=>{return{ 
    first_name : document.getElementById('input-first-name').value,
    last_name : document.getElementById('input-last-name').value,
    email : document.getElementById('input-email').value,
}}
);





/*
view.elementEvent('click', 'msg-model-add', {model: 'add', data: {
    first_name : document.getElementById('input-first-name').value,
    last_name : document.getElementById('input-last-name').value,
    email : document.getElementById('input-email').value,
}}, function(a){
    document.getElementById('modalDivBody').innerHTML = JSON.stringify(a);
    document.getElementById('modalDiv').style.display = 'block';  
});
*/



view.elementEvent('click', 'msg-model-list', {model: 'getData'}, function(a){
    document.getElementById('modalDivBody').innerHTML = JSON.stringify(a);
    document.getElementById('modalDiv').style.display = 'block';  
});

view.elementEvent('click', 'msg-model-each', {model: 'getEach'}, function(a){
    document.getElementById('modalDivBody').innerHTML = JSON.stringify(a);
    document.getElementById('modalDiv').style.display = 'block';  
});

view.elementEvent('click', 'msg-model-one', {model: 'getOne'}, function(a){
    document.getElementById('modalDivBody').innerHTML = JSON.stringify(a);
    document.getElementById('modalDiv').style.display = 'block';  
});









