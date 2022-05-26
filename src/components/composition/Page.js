const Page = ({ title, important, content }) => {
	return (
		<main>
			<h1><strong>{title}</strong></h1>
			<div style={{ display: 'flex' }}>
				{important}
				{content}
			</div>
		</main>
	);
}

export default Page;