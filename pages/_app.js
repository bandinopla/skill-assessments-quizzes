
 
import { LanguageContext } from "../components/LanguageProvider";
import "../styles/global.css";

export default function MainApp({ Component, pageProps }) {
 
    return <LanguageContext.Provider value={pageProps.dictionary}>  
        <Component {...pageProps}/>
    </LanguageContext.Provider>

}