// EXECUTE WHEN ELECTRON APP IS READY

module.exports = function()
{
    console.log('Application started...');    
    Application.system.window.create();
    
  //  Application.system.controller.showMessage({title:'Error', body:'Bad controller name!', color:'red'});
    Application.system.controller.load('home', 'hello=world');   

}

