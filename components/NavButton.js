export default function NavButton({ onClick, children }) {

    //return <button type="button" className="p-3 bg-slate-200 ">{children}</button>
    return <button onClick={onClick} type="button" className="mx-3 rounded-md bg-slate-200 p-2 text-lg">{ children }</button>
 
}