import BarElement from "./BarElement";


import "./directory.css"
function DirectBar(props){
    var list = []

    for (const elem of props.elems){
        list.push(<BarElement manip={props.pageManipulator} key={elem.rel+elem.text} rel={elem.rel} text={elem.text} sideHrefs={elem.sideHrefs}></BarElement>)
    }

    return (
        <div className="DirectBar">
            <BarElement rel={"#"} text="Honors Precalculus Review"></BarElement>
            {list}
        </div>
    )
}

export default DirectBar;