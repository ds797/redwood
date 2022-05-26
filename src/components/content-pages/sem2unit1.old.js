import {MathJax} from 'better-react-mathjax';
import "./sem2style.css"

const grabUnit1 = () =>{
    return(
        <>
        <bold><h1 className="unitHeader">Unit 1 - Trigonometric Identities</h1></bold>
        <h3>Inverse functions and Trigonometric identities</h3>
        <hr></hr>
        <div id="trigIdentities">
            <h3 id="trigIdentityFooter">Special identities:</h3>
            <hr></hr>
            <MathJax className="mathJax">{"\\(tan(x) = \\frac{sin(x)}{cos(x)}\\)"}</MathJax>
            <MathJax className="mathJax">{"\\(cot(x) = \\frac{cos(x)}{sin(x)}\\)"}</MathJax>
            <MathJax className="mathJax">{"\\(sec(x) = \\frac{1}{cos(x)}\\)"}</MathJax>
            <MathJax className="mathJax">{"\\(csc(x) = \\frac{1}{sin(x)}\\)"}</MathJax>
        </div>
        <p id="mainText">Trigonometric identities in this unit are used to manipulate one side of a given equation in order to prove equality.
         For Example, these two sides can be proven using know identities of the part: 
         <br></br>
         <MathJax className="mathJax">{"\\(\\frac{csc(x) + cot(x)}{tan(x) + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
         <br></br>
         <MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin{x}}}{\\frac{sin(x)}{cos(x)} + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
         <br></br>
         <h1>WORK IN PROGRESS LOL</h1>
        </p>
        
        </>
    )
}

export default grabUnit1;
