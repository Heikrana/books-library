import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByTitle, searchBySubject } from "../../Api/Search";
import "./BookList.css";

export interface BookData {
	title: string;
	publish_year: Array<number>;
	first_publish_year: number;
	author_name: Array<string>;
}

interface Book {
	numFound?: number;
	docs?: Array<BookData>;
	work_count?: number;
	works?: Array<{ title: string }>;
}

function BookList() {
	const { domain, name } = useParams();
	const [queryCompleted, setQueryCompleted] = useState(false);
	const [list, setList] = useState<JSX.Element[] | JSX.Element>([]);
	const [books, setBooks] = useState<Book>({
		numFound: 0,
		docs: [],
		work_count: 0,
		works: [],
	});

	useEffect(() => {
		if (domain === "book") {
			if (name) {
				searchByTitle(name).then((books) => {
					setQueryCompleted(true);
					setBooks(books);
				});
			}
		} else if (domain === "subject") {
			if (name) {
				searchBySubject(name).then((books) => {
					setQueryCompleted(true);
					setBooks(books);
				});
			}
		}
	}, [domain, name]);

	useEffect(() => {
		if (books.numFound && books.docs && books.numFound > 0) {
			setList(
				books.docs.map((book, idx) => {
					return (
						<li key={idx} className="book-card">
							<p>
								<strong>{book.title}</strong> <br /> by{" "}
								{/* {book.author_name[0]} */}
							</p>
							<p>
								<strong>{book.title}</strong> <br /> by{" "}
								{/* {book.author_name[0]} */}
							</p>
							<p>
								<strong>{book.title}</strong> <br /> by{" "}
								{/* {book.author_name[0]} */}
							</p>
							{/* <p>First Published: {book.first_publish_year}</p>
							<p>
								Last Published: {Math.max(...book.publish_year)}
							</p> */}
						</li>
					);
				})
			);
		} else if (books.work_count && books.works && books.work_count > 0) {
			setList(
				books.works.map((book, idx) => {
					return (
						<li key={idx} className="book-card">
							{book.title}
						</li>
					);
				})
			);
		} else if (queryCompleted) {
			setList(<h1>Not Found, try search a different book or subject</h1>);
		}
	}, [books]);

	return (
		<>
			<ul className="book-list">{list}</ul>
		</>
	);
}

export default BookList;
