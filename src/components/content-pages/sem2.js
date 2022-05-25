import grabUnit1 from "./sem2unit1.js"

const grab2 = (unit = 1) =>{
    switch (unit){
        case 1:
            return (
                grabUnit1()
            )
        default:
            return(
                <h1>No unit made</h1>
            )
    }
}

export default grab2;