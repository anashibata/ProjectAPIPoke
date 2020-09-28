const pokemon = require("../javascripts/pokemon")
global.fetch = require("node-fetch")

it("Get pokemon data", async function() {      
    const result = await pokemon.getPokemon('charizard')  
    expect(result.name).toEqual('charizard')
})


it("Get pokemon description", async function() {
    const pokemonDescription = await pokemon.getDescription("https://pokeapi.co/api/v2/pokemon-species/6/")   
    expect((pokemonDescription.flavor_text_entries[0].flavor_text).length).not.toBe(0)
})



