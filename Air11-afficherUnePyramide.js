

let caract = process.argv[2];
let etages = process.argv[3];
//console.log(etages);
function pyramide (nbre1,nbre2)
{
    //d'abord il faut créer les différentes lignes
    for ( i = 1; i <= nbre1; i++ )
    {
        let tab = "";
        //ensuite on ajoute le nombre d'espaces avant les caractères
        for ( j = 1; j <= nbre1-i; j++ )
        {
            tab += " ";
        }
        //enfin on ajoute les caractères necessaires
        for ( k = 1; k <= i*2 -1; k++ )
        {
            tab += nbre2;
        }
        console.log(tab);
    }

}
pyramide(etages,caract);