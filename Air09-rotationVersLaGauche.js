let tab = process.argv.slice(2);

function rotation (param1)
{
    let temp = [];
    if ( tab.length === 0 || tab.length === 1 )
    {
        return("erreur");
    }
    else
    {

        for (i = 0; i< param1.length; i++)
        {
            temp = param1[i];
            param1.shift(param1[i]);
            param1.push(temp);
            break;
        }
        param1 = param1.join(", ");
        return(param1);
    }

}
console.log(rotation(tab));