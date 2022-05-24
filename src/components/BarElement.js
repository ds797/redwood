import "./directory.css"


function BarElement(props){
    var list = props.sideHrefs === undefined ? [] : props.sideHrefs.map(({text})=>{
        return <button onClick={() => props.manip(<p>{props.rel}</p>)} key={text} className="BarElement Rel dropdown-element">{text}</button>
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