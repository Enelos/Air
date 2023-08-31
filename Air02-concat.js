let tableau = process.argv.slice(2);


function concat (paramettre1)
{
    //gestion des arguments
    if ( tableau === undefined )
    {
        console.log("erreur");
    }
    else
    {

        let newTableau = [];
        let separateur = [];
        let string = "";
        
        for ( i = 0; i < paramettre1.length; i++ )
        {
            //je parcours mon tableau pour récupérer mon dernier élément (séparateur) et le supprimer du tableau
            if ( i === paramettre1.length - 1 )
            {
                separateur = paramettre1[i];
                break;
            }
            else
            {
                newTableau[i] = paramettre1[i];
            }
        }
        
        for ( i = 0; i < newTableau.length; i++ )
        {
            //je parcours mon nouveau tableau pour le transformer en string et y incérer le séparateur
            if ( i === newTableau.length - 1 )
            {
                string += newTableau[i] + ".";
                break;
            }
            else
            {
                string += newTableau[i] + separateur;
            }
        }
        return(string);
    }

}
console.log(concat(tableau));