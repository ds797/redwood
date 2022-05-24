//import { Routes, Route } from 'react-router-dom';
import Page from './components/Page.js'
import DirectBar from './components/DirectBar.js'
<<<<<<< HEAD

=======
import './global.css';
>>>>>>> 9d4119174e2a2b9ec8d7a394eb0378a761ddb1f4

const App = () => {
	var directoryList = [
		{rel: "#sem1", text: "Semester 1", sideHrefs: [{rel : "#", text : "Unit 1 - Trig"}]},
		{rel: "#sem2", text: "Semester 2", sideHrefs: [{rel : "#", text : "Unit 2 - Triangles"}]}
	]

	return (
		<main style={{ height: '100%' }}>
			<DirectBar elems={directoryList} />
			<Page />
		</main>
	);
}

export default App;
