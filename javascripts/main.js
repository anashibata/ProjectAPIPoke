async function getPokemonData () {
    try {
        pokemonSearch = (document.getElementById("ip-search").value).toLowerCase()

        //Pokemon Data
        let pokemon = await getPokemon(pokemonSearch)      
        
        //Pokemon description  
        let pokemonDescription = await getDescription(pokemon.species.url);
 
        let i=0
        let description = []
        for (i=0; i < 3; i++) {
            description.push(pokemonDescription.flavor_text_entries[i].flavor_text)
        }
        document.getElementById("lb-description").innerHTML = description.join('<br>')

        //Pokemon Translation     
        let shakespeareTranslation  = await getTranslation(description.join()) 
        document.getElementById("lb-translation").innerHTML =  shakespeareTranslation.contents.translated

    } catch(error) {
        alert("Occurred an error to retrieve the Pokemon data. "+error)
    }
}


document.addEventListener("DOMContentLoaded", ()=>{   
    document.getElementById("bt-search").addEventListener("click", getPokemonData) 
});
 
