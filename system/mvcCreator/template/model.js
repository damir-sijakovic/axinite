var com = require('./../../../system/view/com.js')();


module.exports = function()
{
    var t = {};
    
    t.getData = async function()
    {        
        if (Application.db)
        {           
            var sqlData = "SELECT * FROM contacts";
            var returnRowData = await Application.system.model.all(sqlData, []);

            return returnRowData;
        }

        return null;        
    } 
    
    

    return t;
}
