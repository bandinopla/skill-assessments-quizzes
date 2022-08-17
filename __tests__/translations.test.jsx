import fs from "fs";
import glob from "glob";
import path from "path";
import YAML from "yaml"; 

 
describe("Checking the format of the translation files", ()=>{

    //
    // this is the BASE. The file we know is right...
    //
    const en        = YAML.parse( fs.readFileSync(path.join(process.cwd(), "l18n/en.yaml"), 'utf8') );
    const enKeys    = Object.keys( en )
    
    //
    // for each language file...
    //
    glob
        .sync("l18n/**/*.yaml")
        .forEach( filePath  => {
            
            const yaml      = YAML.parse( fs.readFileSync(path.join(process.cwd(), filePath), 'utf8') );
            const keys      = Object.keys( yaml )
            const allKeysOk = keys.reduce( (ok, key)=>{
                if( enKeys.indexOf(key)<0 ) return `File ${filePath} has an unknown or misspelled key --> ${key}`
                return ok;
            } ,true)
 
    
            test(`Check ${filePath} is well formatted`, ()=>{
    
                expect(allKeysOk) .toBe(true)
    
            });  
    
        }); 

})

