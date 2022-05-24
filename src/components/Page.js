import './Page.css';

export const Page = ({ semester = 1 }) => {
	return (
		<main>
			{	semester === 1
			?	<p>Testing 1</p>
			: <p>Testing 2</p>
			}
		</main>
	);
}

export default Page;