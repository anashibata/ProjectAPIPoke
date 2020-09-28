//translate from Pokemon language to Shakespeare"s Pokemon Style
function getTranslation(pokemonDescription) {
    return new Promise((resolve, reject) => {           
        const apiUrl = "https://api.funtranslations.com/translate/shakespeare.json?text="+pokemonDescription
        fetch(apiUrl)
            .then(data => {   
                if (data.ok) {          
                    resolve(data.json())     
                } else {
                    reject("Fail to retrieve shakespeare translation")
                }                     
            })                   
            .catch( error => {
                throw new Error("Fail to retrieve shakespeare translation "+error);
            })          
    }) ;
}

module.exports = {
    getTranslation: getTranslation
}