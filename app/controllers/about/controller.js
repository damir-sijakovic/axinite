module.exports = function()
{
    var t = {};
    
    t.hello = function(data)
    {
        console.log('hello-server-data', data);
    } 
    
    t.two = function(data)
    {
        console.log('two-server-data', data);
    } 
    
    return t;
}

