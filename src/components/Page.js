import Item from './Item.js';
import './Page.css';

export const Page = ({ key = 0, content = [{ key: 0, title: 'Triangles', content: 'Triangles have three sides.' }] }) => {
	return (
		<main style={{ background: 'black', color: 'white' }}>
			<Item content={content[key] ?? { title: 'No page found! :(', content: 'Try navigating to another page.' }} />
		</main>
	);
}

export default Page;