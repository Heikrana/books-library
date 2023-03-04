import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByTitle, searchBySubject } from "../../Api/Search";
import { MdSkipPrevious, MdSkipNext, MdGroupRemove } from "react-icons/md";
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
	const [startIdx, setStartIdx] = useState(0);
	const [endIdx, setEndIdx] = useState(10);
	const [list, setList] = useState<JSX.Element[] | JSX.Element>([]);
	const [books, setBooks] = useState<Book>({
		numFound: 0,
		docs: [],
		work_count: 0,
		works: [],
	});

	useEffect(() => {
		setStartIdx(0);
		setEndIdx(10);

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
		console.log(books.docs?.length, startIdx, endIdx);
		if (books.numFound && books.docs && books.numFound > 0) {
			// search by title/author
			setList(
				books.docs.slice(startIdx, endIdx).map((book, idx) => {
					return (
						<li key={idx} className="book-card">
							<p>
								<strong>{book.title}</strong> <br /> by{idx}
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
			// search by subject
			setList(
				books.works.slice(startIdx, endIdx).map((book, idx) => {
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
	}, [books, startIdx, endIdx]);

	return (
		<>
			<div className="book-main">
				<ul className="book-list">{list}</ul>
				{queryCompleted && (
					<div className="book-btn">
						<button
							disabled={startIdx <= 0}
							onClick={() => {
								setStartIdx((startIdx) => startIdx - 10);
								setEndIdx((endIdx) => endIdx - 10);
							}}
						>
							<MdSkipPrevious />
							<span>Previous</span>
						</button>
						<button
							disabled={
								!Boolean(
									(books.docs &&
										endIdx < books.docs.length) ||
										(books.works &&
											endIdx < books.works.length)
								)
							}
							onClick={() => {
								setStartIdx((startIdx) => startIdx + 10);
								setEndIdx((endIdx) => endIdx + 10);
							}}
						>
							<span>Next</span>
							<MdSkipNext />
						</button>
					</div>
				)}
			</div>
		</>
	);
}

export default BookList;
