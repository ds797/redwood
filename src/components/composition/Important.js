const Important = ({ title, content }) => {
	return (
		<div style={{height: 'fit-content', width: 'fit-content', float: 'left', margin: "1vw", padding: '1rem', border: '0.125rem solid black', borderRadius: '0.5rem' , alignSelf: 'flex-start'}}>
			<h3>{title}</h3>
			{content}
		</div>
	);
}

export default Important;