let string = process.argv[2];
let separateur = process.argv[3];

//string = string.split(separateur);
//console.log(string);
function splitEnFonction(paramettre1)
{
    let tableau = [];
    let mot = [];
    let tab = [];

    for ( i = 0; i <= paramettre1.length; i++ )
    {
        //si l'élément du tableau en position i = " "
        if ( paramettre1[i] === " " )
        {
            mot = tab;//je remplie ma variable mot avec le mot que j'ai récupéré dans tab
            if ( mot === " " + separateur) // si mot  = mon mot separateur
            {
                i = i + 1; //j'initialise i
                tab = ","; //je rajoute une virgule à la place
                mot = [];//j'initialise la variable mot
            }
            else//lorsque le mot ne correspond pas à mon mot séparateur
            {
                tableau += tab + " ";//j'ajoute le mot qui se trouve dans tab et je rajoute un espace
                tab = [];//j'initialise tab
            }
        }
        else if ( i === paramettre1.length )//lorsque j'arrive à la fin de ma string
        {
            tableau += tab;
        }
        
        tab += paramettre1[i]; //je récupère chaque élément de string pour le mettre de tab
    }
    tableau = tableau.replace(",","\n");//je remplace ma virgule par un retour à la ligne
    return(tableau);
}


console.log(splitEnFonction(string));