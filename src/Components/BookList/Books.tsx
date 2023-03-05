import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByTitle, searchBySubject } from "../../Api/Search";
import { Book } from "../../App";
import List from "./List";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { Circles } from "react-loader-spinner";
import "./Books.css";

function Books() {
	const { domain, name } = useParams();
	const [queryCompleted, setQueryCompleted] = useState(false);
	const [startIdx, setStartIdx] = useState(0);
	const [endIdx, setEndIdx] = useState(10);
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

	return (
		<>
			<div className={`loader ${queryCompleted && "hide"}`}>
				<Circles
					height="160"
					width="160"
					color="#fc8597"
					ariaLabel="circles-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
			{queryCompleted && (
				<div className="book-main">
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
					<p>
						Showing books {startIdx + 1} - {endIdx}
					</p>
					<ul className="book-list">
						<List
							queryCompleted={queryCompleted}
							books={books}
							startIdx={startIdx}
							endIdx={endIdx}
						/>
					</ul>
				</div>
			)}
		</>
	);
}

export default Books;
