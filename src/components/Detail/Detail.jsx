import DetailPOP from './Detail.styled';

const Detail = ({event, back}) => {
	return (
		<DetailPOP className="background">
			<article>
				<button onClick={back}>X</button>
				<h2>{event.title}</h2>
				<p>{event.date}</p>
				<p>{event.description}</p>
				<iframe
					title="event.id"
					src="https://maps.google.com/maps?q=neuefische&t=&z=13&ie=UTF8&iwloc=&output=embed"
					width="100%"
					height="200"
				/>
			</article>
		</DetailPOP>
	);
};

export default Detail;
