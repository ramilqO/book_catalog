import "./Card.css";

export default function Card(props) {
	return(
		<div className="card">
			<div className="container">
				<p className="book_name">{props.name}</p>
		        <p className="book_info">{props.author}</p>
				<p className="book_info">{props.year}</p>
				<p className="book_info">{props.isbn}</p>
			</div>
		</div>
		)
}