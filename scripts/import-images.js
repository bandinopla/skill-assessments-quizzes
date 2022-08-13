
/**
 * import the images from the data folder so nextjs can use them
 */
const fs = require("fs")
const path = require("path")
const glob = require("glob")

glob.sync("data/**/*.{png,jpg,jpeg}")
    .forEach( file_path => {
        
        fs.mkdirSync( "public/"+path.dirname(file_path), { recursive: true } )
        fs.copyFileSync(file_path, "public/"+file_path ) 
    })

//fs.mkdirSync("public/testing/abc.jpg", { recursive: true })