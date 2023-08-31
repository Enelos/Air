let string = process.argv.slice(2);
//console.log(string);
let result = [];
function chercherlintrus (paramettre1)
{
    //gestion des arguments
    if (paramettre1.length === 0)
    {
        return("erreur");
    }
    else
    {
        for (i = 0; i < paramettre1.length; i++)
        {
            //console.log(paramettre1[i]);
            for (j = i + 1; j < paramettre1.length; j++)
            {
                //je parcours les élements de string pour vérifier qui apparait en double
                if (paramettre1[i] === paramettre1[j])
                {
                    //si je trouve un double, alors je les remplace par "-"
                    paramettre1[i] = "-";
                    paramettre1[j] = "-";
                }
                if (j === paramettre1.length-1)
                {
                    //dès que j'arrive à la fin, j'arrête ma première boucle
                    break;
                }
            }
        }
        for (i = 0; i < paramettre1.length; i++)
        {
            //je parcours mon string modifié et cherche celui qui n'a pas été remplacé car pas de double
            if (paramettre1[i] !== "-")
            {
                result = paramettre1[i];
            }
        }

    }
    return(result);
}
console.log(chercherlintrus(string));