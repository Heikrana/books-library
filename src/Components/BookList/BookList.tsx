import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByTitle, searchBySubject } from "../../Api/Search";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import "./BookList.css";

export interface BookData {
	title: string;
	publish_year: Array<number>;
	first_publish_year: number;
	author_name: Array<string>;
	subject: Array<string>;
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
		if (books.numFound && books.docs && books.numFound > 0) {
			console.log(books.numFound, books.docs);
			// search by title/author
			setList(
				books.docs.slice(startIdx, endIdx).map((book, idx) => {
					if (
						book.title &&
						book.author_name &&
						book.first_publish_year &&
						book.publish_year.length > 0
					) {
						return (
							<li key={idx} className="book-card">
								<img src="/book-cover.webp" alt="book-cover" />
								<p>
									<span>{book.title}</span> <br /> by
									<em>{" " + book.author_name[0]}</em>
								</p>
								<p>
									First Published: {book.first_publish_year}{" "}
									<br />
									Last Published:{" "}
									{Math.max(...book.publish_year)}
								</p>
							</li>
						);
					} else {
						return (
							<li key={idx} className="book-card">
								<p>Book details not found. API error.</p>
							</li>
						);
					}
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
				<p>
					Showing books {startIdx + 1} - {endIdx}
				</p>
				<ul className="book-list">{list}</ul>
			</div>
		</>
	);
}

export default BookList;
