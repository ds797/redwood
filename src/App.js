import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { first } from './components/content-pages/units';
import './global.css';
import DirectBar from './components/DirectBar';
import {MathJaxContext} from "better-react-mathjax"
import FourOhFour from './components/FourOhFour';

const App = () => {
	const [setRoute] = useState("/");

	const directoryList = [{
			rel: "#sem1", route: '/sem1', text: "Semester 1", element: <h1>Unit 1 placeholder</h1>, sideHrefs: []
		}, {
			rel: "#sem2", route: '/sem2', text: "Semester 2", element: <h1>Unit 2 placeholder</h1>, sideHrefs: [{
				rel: "#", route: '/sem2/unit1', text: "Unit 1 - Trig Identities", element: first[0]
			}]
		}
	];

	return (
		<MathJaxContext>
			<DirectBar elems={directoryList} setRoute={setRoute} />
			<Router>
				<Routes>
					{directoryList.map(v => <Route path={v.route}>
						{v.sideHrefs.map(unit => <Route path={unit.route} element={unit.element} />)}
					</Route>)}
					<Route path="*" element={<FourOhFour />} />
				</Routes>
			</Router>
		</MathJaxContext>
	);
}

export default App;
