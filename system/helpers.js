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

    t.loadFile = function(filename)
    {
        return Application.fs.readFileSync(filename,{ encoding: 'utf8' });
    } 
        
    return t;
}

