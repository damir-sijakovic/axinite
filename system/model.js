module.exports = function()
{
    var t = {};
        
    t.all = function(query, params)
    {       
        return new Promise(function(resolve, reject) {
            if(params == undefined) params=[];

            Application.db.all(query, params, function(err, rows)  {
                if(err) reject("Read error: " + err.message)
                else {
                    resolve(rows);
                }
            })
        })
    }   
        
    return t;
}

