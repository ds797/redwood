const Item = ({ content }) => {
	return (
		<main>
			<h2>{content.title ?? 'No title provided'}</h2>
			<p>{content.content ?? 'No content provided'}</p>
		</main>
	);
}

export default Item;