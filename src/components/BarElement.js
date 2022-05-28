import "./directory.css"
import grab2 from "./content-pages/sem2.js"

function BarElement(props){
    var list = props.sideHrefs === undefined ? [] : props.sideHrefs.map(({text,route},index)=>{
        return <button onClick={() => {window.location = route}} key={text} className="BarElement Rel dropdown-element">{text}</button>
    })

    return (
        <>
        <div className="BarElementWrapper">
            <button className={props.rel==="#" ? "BarElement noRel" : "BarElement Rel"}>{props.text}</button>
            <div className="dropdown" id={props.rel}>
                {list}
            </div>
        </div>
        </>    
    )
}

export default BarElement;