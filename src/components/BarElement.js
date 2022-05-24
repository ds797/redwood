import "./directory.css"

function changeMain(content){
    console.log(1)
}

function BarElement(props){
    var list = props.sideHrefs === undefined ? [] : props.sideHrefs.map(({text})=>{
        return <button onClick={changeMain("<h1>test</h1>")} key={text} className="BarElement Rel dropdown-element">{text}</button>
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