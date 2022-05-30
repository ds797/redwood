import { MathJax } from "better-react-mathjax";
import Page from '../composition/Page';
import Important from '../composition/Important';
import "./sem2style.css"

export const first = [<>
	<Page title={'Unit 1 - Trigonometric Identities'} important={<></>} content={<>
			<div id="simpleIdentities">	
				<Important title={'Special identities:'} content={<>
					<MathJax className="mathJax">{"\\(tan(x) = \\frac{sin(x)}{cos(x)}\\)"}</MathJax>
					<MathJax className="mathJax">{"\\(cot(x) = \\frac{cos(x)}{sin(x)}\\)"}</MathJax>
					<MathJax className="mathJax">{"\\(sec(x) = \\frac{1}{cos(x)}\\)"}</MathJax>
					<MathJax className="mathJax">{"\\(csc(x) = \\frac{1}{sin(x)}\\)"}</MathJax>
				</>}></Important>
				<p id="mainTextUnit1">Trigonometric identities in this unit are used to manipulate one side of a given equation in order to prove equality.
			For Example, these two sides can be proven using know identities of the part: 
					<br></br>
					<MathJax id="trigIdentity1Initial" className="mathJax">{"\\(\\frac{csc(x) + cot(x)}{tan(x) + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<button id="calltrigIdentity1Solution" onClick={() => {document.getElementById("trigIdentity1Solution").style.display = (document.getElementById("trigIdentity1Solution").style.display ==="none") ? "inline" :"none"}}>See Solution: </button>
				</p>
				
				<div id="trigIdentity1Solution">
					<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin(x)}}{\\frac{sin(x)}{cos(x)} + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin(x)}}{\\frac{sin(x)}{cos(x)} + \\frac{sin(x)cos(x)}{cos(x)}} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin(x)}}{\\frac{sin(x)(1 + cos(x))}{cos(x)}} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{1+cos(x)}{sin(x)} * \\frac{cos(x)}{sin(1+cos(x)} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{1}{sin(x)} * \\frac{cos(x)}{sin(x)} = cot(x)csc(x)\\)"}</MathJax>
				</div>
				<div id="additionIdentities">
					<hr></hr>
					<h1>Addition and Half-Angle Identities</h1> 
					<Important title={"Addition Identities:"} content={<>
						<MathJax>{"\\(sin(A+B) = sin(A)cos(B) + sin(B)cos(A)\\)"}</MathJax>
						<MathJax>{"\\(cos(A+B)) = sin(A)sin(B) + cos(A)cos(B)\\)"}</MathJax>
						<MathJax>{"\\(sin(2A) = 2sin(A)cos(A)\\)"}</MathJax>
						<MathJax>{"\\(cos(2A) = cos^2(A) - sin^2(A)\\)"}</MathJax>
						<MathJax>{"\\(cos(2A) = 1 - 2sin^2(A)\\)"}</MathJax>
						<MathJax>{"\\(cos(2A) = 2cos^2(A) - 1\\)"}</MathJax>
						<MathJax>{"\\(tan(2A) = \\frac{2tan(A)}{1-tan^2(A)}\\)"}</MathJax>
						<hr className="inImportant"></hr> 
						<h3>Half-Angle Identities: </h3>
						<MathJax>{"\\(sin(\\frac{A}{2}) = \\pm\\sqrt{\\frac{1-cos(A)}{2}}\\)"}</MathJax>
						<MathJax>{"\\(cos(\\frac{A}{2}) = \\pm\\sqrt{\\frac{1+cos(A)}{2}}\\)"}</MathJax>
						<MathJax>{"\\(tan(\\frac{A}{2}) = \\pm\\sqrt{\\frac{1-cos(A)}{1+cos(A)}}\\)"}</MathJax> 
					</>}></Important>
					<div id="additionIdentitiesText">
						<MathJax>{"\\(c^2 = a^2 + b^2 - abcos(C)\\)"}</MathJax>
					</div>
				</div>
			</div>
		</>} />
</>];