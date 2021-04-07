/*
CREATE TABLE contacts (
	contact_id INTEGER PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
);

  INSERT INTO artists (first_name, last_name, email)
    VALUES
        ("Buddy Rich"),
        ("Candido"),
        ("Charlie Byrd");

*/

module.exports = function()
{
    var t = {};
    
    t.add = function(data)
    {        
        if (Application.db)
        {
            var sqlData = 'INSERT INTO contacts (first_name, last_name, email) VALUES ';
            sqlData += '("'+ data.first_name +'",';
            sqlData += '"'+ data.last_name +'",';
            sqlData += '"'+ data.email +'");';

            Application.db.run(sqlData); 

            return 'Data inserted!';
        }

        return 'No data inserted!';        
    } 
    
    t.getData = async function()
    {        
        if (Application.db)
        {           
            var sql = "SELECT * FROM contacts";
            var returnRowData = await Application.system.model.all(sql, []);

            return returnRowData;
        }

        return 'No data inserted!';        
    } 
    
    

    return t;
}


