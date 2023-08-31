let tableau = process.argv.slice(2);
function insererDansTableau (paramettre1)
{
    let argument= "";
    let index = "";
    //récupérer le dernier argument et mettre les éléments du tableau en nombre
    for ( i=0; i<paramettre1.length; i++ )
    {
        paramettre1[i] =Number(paramettre1[i]);
        if ( i === paramettre1.length-1 )
        {
            argument = Number(paramettre1[i]);
            //console.log(argument);
            paramettre1.splice(i,1);//supprimer le dernier élements du tableau trié
            break;
        }
    }
    //trouver la place du dernier argument dans le tableau et l'insérer à la première position
    for ( i=0; i< paramettre1.length; i++ )
    {
        if ( paramettre1[i]< argument && paramettre1[i+1]> argument)
        {
            paramettre1.unshift(argument);
            break;
        }
    }
    //inverser les éléments du tableau jusqu'à la place du dernier élement dans le tableau trié
    for ( i=0; i<paramettre1.length; i++)
    {
        if(paramettre1[i]>paramettre1[i+1])
        {
            paramettre1[i]= paramettre1[i+1];
            paramettre1[i+1] = argument;
        }
        else
        {
            //renvoyer le tableau en string
            return(paramettre1.join(" "));
        }
    }

}
console.log(insererDansTableau(tableau));