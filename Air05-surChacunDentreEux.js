let nbre = process.argv.slice(2);

function operation (paramettre1)
{
    let operator = [];
    let resultat = [];
    let symbole = "";
    //gestion des arguments
    if ( nbre === undefined )
    {
        console.log("erreur");
        return;
    }
    else
    {
        for ( i = 0; i < paramettre1.length; i++ )
        {
            //gestion des arguments
            if ( isNaN(paramettre1[i]) === true )
            {
                console.log("error");
                return;
            }
            //récupérez l'opérateur et le nombre commun
            else if ( i === paramettre1.length - 1)
            {
                operator = paramettre1[i];
                break;
            }
            //transformez tous les éléments avant l'opérateur en nombre
            paramettre1[i] = Number(paramettre1[i]);
        }
        for (i = 0; i < operator.length; i++ )
        {
            //récupérez l'opérateur sans le nombre commun
            if ( isNaN(operator[i]) === true )
            {
                symbole = operator[i];//mettre le symbole opérateur dans une variable
                operator = Number(operator);//mettre le nombre commun en nombre
                break;
            }
        }
        
            for ( j = 0; j < paramettre1.length -1; j++ )
            {
                //effectuer l'opération entre l'élément du tableau et le nombre commun
                resultat[j] = paramettre1[j] + operator;
                if ( j === paramettre1.length - 2 )
                {
                    break;
                }
            }
            console.log(resultat.join(" "));//transformez le tableau en string

    }
}
operation(nbre);