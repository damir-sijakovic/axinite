var com = require('./../../../system/view/com.js')();

module.exports = function()
{
    var t = {};
    
    //INSERT DATA
    t.add = async function(data)
    {        
        if (Application.db)
        {

            var sqlData = 'INSERT INTO contacts (first_name, last_name, email) VALUES ';
            sqlData += '("'+ data.first_name +'",';
            sqlData += '"'+ data.last_name +'",';
            sqlData += '"'+ data.email +'");';

            var lastId = await Application.system.model.run(sqlData, []);
            
            return lastId;
        }

        return -1;        
    } 

    //GET ALL DATA
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
    
    //GET AND MODIFY EACH BY CB FUNCTION AND RETURN MODIFIED LIST
    t.getEach = async function()
    {        
        if (Application.db)
        {   
            var sqlData = "SELECT * FROM contacts";
            var returnRowData = await Application.system.model.each(sqlData, (a)=>{
                //Here you modify item and pass it back to list that will be returned.
                var data = '['+ a.email +']';           
                return data;              
            });

            return returnRowData;
        }

        return null;        
    } 
    
    // GET ONLY ONE ITEM BY ID/ FIND
    t.getOne = async function()
    {        
        if (Application.db)
        {   
            // find:  SELECT * FROM contacts WHERE first_name LIKE '%alpha%';
            var sqlData = "SELECT * FROM contacts WHERE contact_id = 2";
            var returnRowData = await Application.system.model.get(sqlData);
            return returnRowData;
        }

        return null;        
    } 
    
    

    return t;
}


