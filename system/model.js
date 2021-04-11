module.exports = function()
{
    var t = {};
        
    t.all = function(query, params)
    {       
        return new Promise(function(resolve, reject) {
            if(params == undefined) params=[];

            Application.db.all(query, params, function(err, rows)  {
                if (err) reject("SQLITE => Read error: " + err.message)
                else {
                    resolve(rows);
                }
            })
        })
    }   

    t.run = function(query, params)
    {       
        return new Promise(function(resolve, reject) 
        {
            if (params == undefined)
            {
                params = [];
            }
            
            Application.db.run(query, params, function(err)
            {
                if (err)
                {
                    reject("SQLITE => Read error: " + err.message);
                }
                else 
                {
                    resolve(this.lastID);
                }
            }); 
        })
    }   
        
    t.each = function(query, cb, params=[])
    {       
        return new Promise((resolve, reject) => {
            var queries = [];
            Application.db.each(query, params, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    queries.push(cb(row)); 
                }
            }, (err, n) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(queries); 
                }
            });
        });
    }   
 

    t.get = function(query, params)
    {       
        return new Promise(function(resolve, reject) {
            if(params == undefined) params=[];
  
            Application.db.get(query, params, function(err, row)  {
                if (err) reject("SQLITE => Read error: " + err.message);
                else {
                    row ? resolve(row) : resolve(-1);
                }
            })
        })
    }   
        
    return t;
}

