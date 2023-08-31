let string = process.argv[2];
let argv = process.argv[3];
let result = [];

function noDouble (paramettre1)
{
    //gestion des arguments
    if (argv)
    {
        return("erreur");
    }
    else if (paramettre1 === undefined)
    {
        return("error");
    }
    else
    {
        //je transmforme ma string en tableau
        paramettre1 = paramettre1.split(""); 
        let verif = [];
        for (let i = 0; i < paramettre1.length; i++)
        {
            //je parcours les éléments de mon tableau pour vérifier si une lettre apparait en double

            //deux conditions pour réinitialiser mon i et faire d'autres vérifications grace à verif
            if ( i === paramettre1.length-1 && verif.length !== paramettre1.length)
            {
                i = -1;
                verif = "";
            }
            else if ( i === paramettre1.length - 1 && verif.length === paramettre1.length)
            {
                break;
            }
            //si la lettre 1 est différente de la lettre 2
            else if (paramettre1[i] !== paramettre1[i + 1])
            {
                paramettre1[i] = paramettre1[i];//je laisse la lettre 1 à sa place
                verif += 1;//je rajoute 1 dans vérif
                
            }
            //si la lettre 1 est égale à la lettre 2
            else if (paramettre1[i] === paramettre1[i + 1])
            {
                paramettre1[i] = paramettre1[i]; //je laisse la lettre 1 à sa place
                delete paramettre1[i+1]; paramettre1.splice(i+1, 1);
                //je supprime lettre 2 et retire son emplacement dans le tableau
                verif = "";//je réinitialise vérif
            }
        }
        paramettre1 = paramettre1.join('');//je joins les éléments de mon tableau pour obtenir une string
    }
    return(paramettre1);
}
console.log(noDouble(string));