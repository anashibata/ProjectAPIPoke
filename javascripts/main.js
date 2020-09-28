async function getPokemonData () {
    try {
        pokemonSearch = (document.getElementById("ip-search").value).toLowerCase()

        //Pokemon Data
        let pokemon = await getPokemon(pokemonSearch)      
        
        //Pokemon description  
        let pokemonDescription = await getDescription(pokemon.species.url);
        document.getElementById("lb-description").innerHTML = pokemonDescription.flavor_text_entries[0].flavor_text

        //Pokemon Translation              
        let shakespeareTranslation  = await getTranslation(document.getElementById("lb-description").innerHTML)        
        document.getElementById("lb-translation").innerHTML = shakespeareTranslation.contents.translated
    } catch(error) {
        alert("Occurred an error to retrieve the Pokemon data. "+error)
    }
}


document.addEventListener("DOMContentLoaded", ()=>{   
    document.getElementById("bt-search").addEventListener("click", getPokemonData) 
});
 
