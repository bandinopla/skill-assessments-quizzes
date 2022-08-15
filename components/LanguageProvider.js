import { getRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";

/**
 * @type {import('../lib/l18n').Dictionary}
 */
export const LanguageContext = createContext();

/**
 * @returns {import('../lib/l18n').Dictionary|{ path:(url:string)=>string, systemLanguages:{iso:string, name:string, isSelected:boolean} } }
 */
export const useLanguage = function () {
	const dictionary    = useContext(LanguageContext);
	const router        = useRouter();
	const queryLang     = dictionary[router.query.lang] && router.query.lang;
	const _currentLang  = queryLang || "en";
	const dicc          = dictionary[_currentLang];



	return {
		...dicc,

		/**
		 * available languages...
		 */
		systemLanguages: Object.keys(dictionary).map((iso) => ({
			isSelected: iso == _currentLang,    // currently selected?
			iso,
			name: dictionary[iso].LANG_NAME,
		})),

		/**
		 * Appends the current language query param to the url
		 *
		 * @param {string} url
		 * @param {string} forceThisLang force the path to point to that language
		 * @returns {string}
		 */
		path(url, forceThisLang) {

            let lang = queryLang;

            //
            // remove it if it exists already in the url
            //
            url = url.replace(/(\?|\&)lang=\w+/,"");

            if( forceThisLang )
            {
                if( forceThisLang=='en' ) 
                lang = null;
                else 
                lang = forceThisLang
            }

			if (lang) {
				if (url.indexOf("?") > 0) {
					url += "&";
				} else {
					url += "?";
				}

				url += "lang=" + lang;
			}

			return url;
		},


        /**
         * Switch the system  language
         * @param {string} newIso 
         */
        switchLang( newIso ) { 
            return this.path( router.asPath, newIso )
        }
	};
};
