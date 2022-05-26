
import { MathJax } from "better-react-mathjax";
import Page from "../composition/Page.js";
import Important from "../composition/Important.js";
import "./sem2style.css"

const grab2 = (unit) =>{
	const units = [<>
		<Page title={'Unit 1 - Trigonometric Identities'} important={<>
				<Important title={'Special identities:'} content={<>
					<MathJax className="mathJax">{"\\(tan(x) = \\frac{sin(x)}{cos(x)}\\)"}</MathJax>
					<MathJax className="mathJax">{"\\(cot(x) = \\frac{cos(x)}{sin(x)}\\)"}</MathJax>
					<MathJax className="mathJax">{"\\(sec(x) = \\frac{1}{cos(x)}\\)"}</MathJax>
					<MathJax className="mathJax">{"\\(csc(x) = \\frac{1}{sin(x)}\\)"}</MathJax>
				</>} />
			</>} content={<>
			<div>
				<p id="mainTextUnit1">Trigonometric identities in this unit are used to manipulate one side of a given equation in order to prove equality.
			For Example, these two sides can be proven using know identities of the part: 
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{csc(x) + cot(x)}{tan(x) + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<button id="calltrigIdentity1Solution">See Solution: </button>
					<div id="trigIdentity1Solution">
						<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin{x}}}{\\frac{sin(x)}{cos(x)} + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
						<br></br>
						<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin(x)}}{\\frac{sin(x)}{cos(x)} + \\frac{sin(x)cos(x)}{cos(x)}} = cot(x)csc(x)\\)"}</MathJax>
						<br></br>
						<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin(x)}}{\\frac{sin(x)(1 + cos(x))}{cos(x)}} = cot(x)csc(x)\\)"}</MathJax>
						<br></br>
						<MathJax className="mathJax">{"\\(\\frac{1+cos(x)}{sin(x)} * \\frac{cos(x)}{sin(1+cos(x)} = cot(x)csc(x)\\)"}</MathJax>
						<br></br>
						<MathJax className="mathJax">{"\\(\\frac{1}{sin(x)} * \\frac{cos(x)}{sin(x)} = cot(x)csc(x)\\)"}</MathJax>
					</div>
				</p>
			</div>
		</>} />
		<h1>WORK IN PROGRESS LOL</h1>
	</>, <>
		<Page title={'Unit 1 - Trigonometric Identities'} important={<>
			<Important title={'Special identities:'} content={<>
				<MathJax className="mathJax">{"\\(tan(x) = \\frac{sin(x)}{cos(x)}\\)"}</MathJax>
				<MathJax className="mathJax">{"\\(cot(x) = \\frac{cos(x)}{sin(x)}\\)"}</MathJax>
				<MathJax className="mathJax">{"\\(sec(x) = \\frac{1}{cos(x)}\\)"}</MathJax>
				<MathJax className="mathJax">{"\\(csc(x) = \\frac{1}{sin(x)}\\)"}</MathJax>
			</>} />
		</>} content={<>
			<div>
				<p id="mainTextUnit1">Trigonometric identities in this unit are used to manipulate one side of a given equation in order to prove equality.
			For Example, these two sides can be proven using know identities of the part: 
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{csc(x) + cot(x)}{tan(x) + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
					<MathJax className="mathJax">{"\\(\\frac{\\frac{1}{sin(x)} + \\frac{cos(x)}{sin{x}}}{\\frac{sin(x)}{cos(x)} + sin(x)} = cot(x)csc(x)\\)"}</MathJax>
					<br></br>
				</p>
			</div>
		</>} />
		<h1>WORK IN PROGRESS LOL</h1>
	</>];

	return units[unit - 1];
}

export default grab2;