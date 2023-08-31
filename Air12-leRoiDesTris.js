let temp = process.argv.slice(2);

//gestion des erreurs d'arguments
for ( i=0;i<temp.length;i++)
{
    temp[i] = Number(temp[i]);
}

        function quicksort (array){
            let pivot = [];
            let listepetits = [];
            let listegrands = [];
            let arrayfinal = [];
            //console.log(array ,"c'est mon tableau de base");
            //condition de base
            if ( array.length <= 1  )
            {
                //retourner notre tableau final
                //console.log(listegrands.length);
                return array;
            }else{
                //créer le pivot
                pivot = array.pop(); //console.log(pivot,"voici mon pivot");
                for ( i = 0; i < array.length; i++ ){
                    if ( array[i] < pivot ){
                        listepetits.push(array[i]);
                        //console.log(i ,listepetits, "sont les petits")
                    }else{
                        listegrands.push(array[i]);
                        //console.log(i ,listegrands, "sont les grands")
        
                    }
                }
                //appeler de la fonction elle même avec les deux autres listes pour que le trie se fasse de manière répété
                //avec les ... et le pivot, pour que le tableau de base reste celui où le pivot est placé à chaque fois (mémoire historique des tries)
                return [...quicksort(listepetits), pivot, ...quicksort(listegrands)];
            }
        
        }
        arrayfinal = quicksort(temp);
        console.log(arrayfinal.join(" "));

    


    


