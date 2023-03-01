interface bookData {
	title: string;
}

interface Book {
	docs: Array<bookData>;
}

function BookList({ books }: { books: Book }) {
	let list: JSX.Element[] = [];

	if (books.docs) {
		list = books.docs.map((book, idx) => {
			return (
				<div key={idx}>
					<ul>
						<li>{book.title}</li>
					</ul>
				</div>
			);
		});
	}

	return <p>{list}</p>;
}

export default BookList;
