const ipc = require('electron').ipcRenderer;
var view = require('./../../../system/view/view.js')();



view.elementEvent('click', 'msg-model-add', {model: 'add'}, 
function(a){
   // do something with returned model data
   // document.getElementById('modalDivBody').innerHTML = JSON.stringify(a);
   // document.getElementById('modalDiv').style.display = 'block';  
}, 
()=>{return{ 
    // get data from index
    // first_name : document.getElementById('input-first-name').value,
    // last_name : document.getElementById('input-last-name').value,
    // email : document.getElementById('input-email').value,
}}
);







