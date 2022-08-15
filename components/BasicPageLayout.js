import React from "react";  
import { useLanguage } from "./LanguageProvider";
import Link from "next/link"

/**
 * @param {object} param0
 * @param {string} param0.title the main title of this layout
 * @param {string} param0.preTitle a small text that will be located above the title 
 *
 * @returns {React.ReactElement}
 */
export default function BasicPageLayout({ title, preTitle, children }) {

    const dictionary = useLanguage()

	return (  
            <div className="container mx-auto ">
                <div className="bg-slate-50">
                    <div className="container mx-auto px-12  ">
                        <div className="max-w-7xl mx-auto p-14 sm:px-6 lg:px-8">
                            <div className="  p-10 bg-white shadow-lg relative">

                            <div className="text-right text-sm">
                            { dictionary.systemLanguages.map( ({ iso, name, isSelected })=>
                                <span key={iso} className={"mx p-2 " + (isSelected? " bg-slate-200 rounded font-bold":"") }>
                                    <Link href={ dictionary.switchLang(iso) }>{name}</Link>
                                </span> )}
                                </div>

                                <h2 className="text-base text-indigo-600 font-semibold  uppercase">
                                    {preTitle}
                                </h2>
                                <p className="mt-2 mb-10 text-3xl font-extrabold tracking-tight text-gray-900  ">
                                    {title}
                                </p>

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
	);
}  
