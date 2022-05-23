import "./directory.css"



function BarElement(props){
    return (
        <>
        <div className="BarElementWrapper">
            <button className={props.rel==="#" ? "BarElement noRel" : "BarElement Rel"}>{props.text}</button>
            <div className="dropdown" id={props.rel}>
            </div>
        </div>
        </>    
    )
}

export default BarElement;