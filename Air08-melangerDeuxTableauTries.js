let tabTotal = process.argv.slice(2);
let tab1 = [];
let tab2 = [];
let verif = [];
let mot = [];
let index = [];
function tabTriés (para1)
{
    //gestion d'arguments
    for ( i = 0; i < para1.length; i++ )
    {
        if (para1[i] === "fusion" )
        {
            index = i;
            delete(para1[i]);
            mot = para1.splice(i,1);
            break;
        }
        tab1[i] = para1[i];
    }
 
    for ( i = index; i < para1.length; i++)
    {
        tab2[i] = para1[i];
    }
    for ( i = 0;i < tab2.length; i++ )
    {
        if ( tab1[i] > tab1[i+1] || tab2[i] > tab2[i+1])
        {
            return("erreur");
        }
    }

   
    //programme
    let temp = [];
    for ( i = 0; i < para1.length-1; i++ )
    {
        temp = para1[i];
        verif = [];
        for (j = i+1; j < para1.length; j++ )
        {
            if ( para1[i] < para1[j] )
            {
                verif += 1;
            }
            else if ( para1[i] > para1[j] )
            {
                para1[i] = para1[j];
                para1[j] = temp;
                verif = [];
                i = -1;
                break;
            }
        }
    }
    return(para1.join(" "));
}
console.log(tabTriés(tabTotal));

