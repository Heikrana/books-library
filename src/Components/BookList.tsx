import { useEffect, useState } from "react";
import { Book } from "../App";
import { SearchTitleAuthor } from "../Api/Search";

function BookList({ query }: { query: string }) {
	const [list, setList] = useState<JSX.Element[]>([]);
	const [books, setBooks] = useState<Book | undefined>(undefined);

	useEffect(() => {
		if (query) {
			SearchTitleAuthor(query).then((res) => setBooks(res));
		}
	}, [query]);

	useEffect(() => {
		if (books?.docs) {
			setList(
				books.docs.map((book, idx) => {
					return (
						<ul key={idx}>
							<li>{book.title}</li>
						</ul>
					);
				})
			);
		}
	}, [books]);

	return <div>{list}</div>;
}

export default BookList;
