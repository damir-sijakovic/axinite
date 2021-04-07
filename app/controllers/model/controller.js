module.exports = function()
{
    var t = {};
    
    t.hello = function(data)
    {
        console.log('hello-server-data', data);
        return 'home/server.js';
    } 
    
    t.two = function(data)
    {
        console.log('two-server-data', data);
    } 
    
    return t;
}

