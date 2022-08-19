import { createContext, useContext } from "react";

/**
 * The context of a group of options. It holds a prop to track the option index the childs must use and increment...
 */
export const OptionsContext = createContext({ index:-1 });


export default function QuizQuestionOptions({ children, ...props }) {
    const isOptionsList = props.node.children.find(itm=>itm.children?.[0].value.indexOf('%OPTION%')==0);
 
    if( isOptionsList )
    { 
        return <OptionsContext.Provider value={{ index:0 }}>
                    <ul>{children}</ul>
                </OptionsContext.Provider>
    }

    return <ul>{children}</ul>
}