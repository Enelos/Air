let string = process.argv[2];
let autre = process.argv[3];

//fonction pour couper une string et remplacer des caractères
function split()
{
    let tableau = [];
    let string_separateur = [];
    //gestion d'erreur d'argument
    if ( string === undefined || string === null)
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
        for ( i=0; i< string.length;i++ )
        {
            let codeAscii = string[i].charCodeAt();//je stock mon code ascii dans la variable
            //je vérifie si mon code ascii fait partie des codes hors lettres et chiffres
            if ( codeAscii <= 47 )
            {
                string_separateur = string[i];
                tableau = string.split(string_separateur);//dès que le séparateur à été trouvé, je sépare ma chaine en tableau
                
            }
            else if ( 58 <= codeAscii && codeAscii <= 64 )
            {
                string_separateur = string[i];
                tableau = string.split(string_separateur);//idem
            }
            else if (91 <= codeAscii && codeAscii <= 96 )
            {
                string_separateur = string[i];
                tableau = string.split(string_separateur);//idem
            }

        }
        for ( i = 0; i< tableau.length; i++ )
        {
            console.log(tableau[i]);//je parcours mon tableau pour afficher chaque élément à la suite
        }
    }
}
split();

