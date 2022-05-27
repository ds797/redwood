import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { first } from './components/content-pages/units';
import './global.css';
import DirectBar from './components/DirectBar';
import {MathJaxContext} from "better-react-mathjax"
import FourOhFour from './components/FourOhFour';

const App = () => {
	const [route, setRoute] = useState("/");

	const directoryList = [{
			rel: "#sem1", route: '/1', text: "Semester 1", sideHrefs: []
		}, {
			rel: "#sem2", text: "Semester 2", sideHrefs: [{
				rel: "#", text: "Unit 1 - Trig Identities", element: first[0]
			}]
		}
	];

	return (
		<MathJaxContext>
			<DirectBar elems={directoryList} route={route} setRoute={setRoute} />
			<h1>{route}</h1>
			<Router>
				<Routes>
					{directoryList.map(v => <Route path={v.route}>
						{v.sideHrefs.map(unit => <Route path={v.route} element={v.element} />)}
					</Route>)}
					<Route path="*" element={<FourOhFour />} />
				</Routes>
			</Router>
		</MathJaxContext>
	);
}

export default App;
