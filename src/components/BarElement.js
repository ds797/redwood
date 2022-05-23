import "./directory.css"



function BarElement(props){
    return (
        <>
        <button className="BarElement" onclick={()=>{console.log(this.text)}}>{props.text}</button>
        </>
    )
}

export default BarElement;