module.exports = function()
{
    var t = {};
    
    t.getComObject = function()
    {
        return {
            id: null,
            message: null,
            data: null,
            status: null, // ok, fail, error
        };       
    } 
        
    return t;
}

