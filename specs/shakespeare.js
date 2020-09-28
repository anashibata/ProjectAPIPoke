const shakespeare = require("../javascripts/shakespeare.js")
global.fetch = require("node-fetch")

it("Get Shakespeare translation", async function() {      
    const shakespeareTranslation = await shakespeare.getTranslation("Spits fire that is hot enough to melt boulders.")     
    expect((shakespeareTranslation.contents.translated).length).not.toBe(0)
})