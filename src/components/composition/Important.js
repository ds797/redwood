const Important = ({ title, content }) => {
	return (
		<main style={{ width: 'fit-content', padding: '1rem', border: '0.125rem solid black', borderRadius: '0.5rem' }}>
			<h3>{title}</h3>
			<div style={{ display: 'flex', flexFlow: 'column' }}>
				{content}
			</div>
		</main>
	);
}

export default Important;