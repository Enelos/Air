let string = process.argv[2];
let autre = process.argv[3];

//fonction pour couper une string et remplacer des caractères
function split(paramettre1)
{
    let tableau = [];
    let space = " ";
    let tab= [];
    //gestion des erreurs d'arguments
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
        //je parcours ma string pour trouver des \
        for ( i = 0; i < paramettre1.length; i++ )
        {
            //console.log(paramettre1[i]);
            variable = paramettre1[i];
            if ( variable === "\\") 
            {
                //si \ trouvé alors je cherche un "n" pour retour à la ligne ou un "t" pour tabulation
                if (paramettre1[i+1] === "n" || paramettre1[i+1] === "t")
                {
                    tableau += tab + ",";//tab contient les chars qui se trouvent avant \
                    i = i + 2;//initialisation de i pour que l'index soit après \n ou \t
                    tab = []; //vider tab pour récupérer le prochain mot       
                } 
            }
            // si pas de \, je cherche des " "
            else if ( variable === space )
            {
                tableau += tab + ",";
                i = i + 1;
                tab = [];
            }
            tab += paramettre1[i];// j'ajoute les chars à tab
            //si i est arrivé au dernier chars, alors je récupère ce qu'il y a dans tab
            if ( i === paramettre1.length -1 )
            {
                tableau += tab;
            }
        }
    }
    tableau = tableau.split(",");//je coupe ma variable tableau à chaque virgule
    tableau = tableau.join("\n");// je joins mes éléments de tableau par un retour à la ligne

    return(tableau);
}
console.log(split(string));