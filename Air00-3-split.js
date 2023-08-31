let string = process.argv[2];
let autre = process.argv[3];
let tab = [];
//fonction pour couper une string et remplacer des caractères
function split(paramettre1)
{
    let tableau = [];
    //gestion d'erreur d'agument
    if ( paramettre1 === undefined )
    {
        console.log("erreur");
    }
    else if ( autre )
    {
        console.log("erreur");
    }
    else
    {
        //je parcours mon paramettre pour obtenir les codes ascii de mes chars
        for ( i=0; i< paramettre1.length;i++ )
        {
            let codeAscii = paramettre1[i].charCodeAt();//je stock mon code ascii dans la variable
            //je vérifie si mon code ascii fait partie des codes hors lettres et chiffres
            if ( codeAscii <= 47 )
            {
                tableau += tab + ",";// je fais pareil que dans Air00-2
                i = i + 1;
                tab = [];
                
                
            }
            else if ( 58 <= codeAscii && codeAscii <= 64 )
            {
                tableau += tab + ",";
                i = i + 1;
                tab = [];
                
            }
            else if (91 <= codeAscii && codeAscii <= 96 )
            {
                tableau += tab + ",";
                i = i + 1;
                tab = [];
            }
            tab += paramettre1[i];
            if ( i === paramettre1.length -1 )
            {
                tableau += tab;
            }
        }
        tableau = tableau.split(",");
        tableau = tableau.join("\n");
    }
    return(tableau);
}
console.log(split(string));

