
import fs from 'fs' 
import path from 'path' 
import glob from "glob";
import YAML from 'yaml'
import { by639_1 } from 'iso-language-codes';

/**
 * @typedef {object} Dictionary
 * @property {string} CHEER
 * @property {string} TITLE
 * @property {string} DESC
 */

/**  
 * Read all language files in the `l18n` folder and creates a dictionary
 * 
 * @returns { {[isoLang:string]:Dictionary } }
 */
export function getDictionary() { 

    return glob
            .sync("l18n/*.yaml")
            .reduce( (dicc, filePath)=>{

                const file = fs.readFileSync(path.join(process.cwd(), filePath), 'utf8') ;
                const isoLang = filePath.match(/\/(\w+)\.yaml$/)[1];
 
                dicc[ isoLang ] = {
                    ...YAML.parse(file),
                    LANG_NAME: by639_1[ isoLang ].nativeName
                }
                
                return dicc;

            }, {} )
} 
 