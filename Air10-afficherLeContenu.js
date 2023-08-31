let text = process.argv[2];
let autreText = process.argv[3];

function afficher (param1)
{
    
    const fs = require('fs');
    if ( autreText )
    {
        console.log("error");
        return;
    }
    else if ( param1 )
    {
        fs.readFile(param1, "utf8", function( err, data){
           if (err) throw err;
           console.log(data.toString()); 
        });
        
    }
    else
    {
        console.log("erreur");
    }

}
afficher(text);
