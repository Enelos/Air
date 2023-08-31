let tab = process.argv.slice(2);

function controle (paramettre1)
{

    let lettre = "";
    let lettre2 = "";
    let verif = "";
    let tab2 = "";
    let chaine = "";
    //gestion d'arguments
    if ( tab.length === 0 )
    {
        return("erreur");
    }
    else
    {
        //je récupère le dernier argument
        for ( i = 0; i < paramettre1.length; i++ )
        {
            if ( i === paramettre1.length-1)
            {
                lettre = paramettre1[i];
                if ( lettre === "")
                lettre2 = paramettre1[i].toUpperCase();
                delete paramettre1[i]; paramettre1.splice(i, 1);
                break;
            }
        }
        //quand l'argument est une chaine de caractères
        if ( lettre.length > 1 )
        {
            for ( i=0;i<paramettre1.length;i++)
            {
                tab2 = paramettre1[i];
                for (j=0;j<tab2.length;j++)
                {
                    chaine += tab2[j];
                    if ( chaine.length === lettre.length && chaine != lettre)
                    {
                        chaine = [];
                        j = j - (lettre.length-1);
                    }
                    else if ( chaine.length === lettre.length && chaine == lettre)
                    {
                        //console.log(chaine === lettre);
                        delete paramettre1[i]; paramettre1.splice(i, 1);
                    }
                }
            }
        }
        else
        {
            //quand l'argument est un seul caractère
            for ( i=0;i<paramettre1.length;i++)
            {
                tab2 = paramettre1[i];
                for (j=0;j<tab2.length;j++)
                {
                    if (tab2[j] == lettre2) 
                    {
                        verif += 1;
                    }
                    else if (tab2[j] == lettre )
                    {
                        verif += 1;
                    }
                    if ( j === tab2.length-1 && verif.length !== 0)
                    {
                        delete paramettre1[i]; paramettre1.splice(i, 1);
                        i = -1;
                        verif = "";
                        break;
                    }
                }
               
            }

        }
    }
        return(paramettre1.join(", "));
}

console.log(controle(tab));
