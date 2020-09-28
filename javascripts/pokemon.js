//get the pokemon url to search the pokemon description
function getPokemon(pokemonSearch) {
    return new Promise((resolve, reject) => {           
        const urlApi = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch 
        fetch(urlApi)
            .then(data => {                
                if (data.ok) {               
                    resolve(data.json())  
                } else {       
                    reject("Pokemon not found.")  
                }
            })                   
            .catch( error => {               
                throw new Error("Fail to retrieve pokeapi data."+error);
            })          
    }) ;
}

//get the Pokemon description
function getDescription(urlDescription) {
    return new Promise((resolve, reject) => {                   
        fetch(urlDescription)
            .then(data => {     
                if (data.ok) {               
                    resolve(data.json())    
                } else {
                    reject("Fail to retrieve pokeapi description.")              
                }                      
            })                  
            .catch( error => {
                throw new Error("Fail to retrieve pokeapi descriptionnnn. "+error);
            })          

    }) ;
}


module.exports = {
    getPokemon: getPokemon,
    getDescription: getDescription
}




