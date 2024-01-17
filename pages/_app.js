
 
import { LanguageContext } from "../components/LanguageProvider";
import "../styles/global.css";
import 'katex/dist/katex.min.css'; // Import the CSS for KaTeX


export default function MainApp({ Component, pageProps }) {
 
    return <LanguageContext.Provider value={pageProps.dictionary}>  
        <Component {...pageProps}/>
    </LanguageContext.Provider>

}