import { Book } from "../App";

async function getBook(url: string) {
	try {
		const res = await fetch(url);

		if (res.status === 200) {
			const data: Book = await res.json();
			console.log(data);
			return data;
		}

		throw new Error("Error fetching data");
	} catch (err) {
		console.error(err);
	}
}

async function SearchTitleAuthor(query: string) {
	let booksFound = await getBook(
		`https://openlibrary.org/search.json?title=${query}&fields=*,availability&limit=10`
	);

	if (booksFound?.numFound !== 0) return booksFound;

	booksFound = await getBook(
		`https://openlibrary.org/search.json?author=${query}&fields=*,availability&limit=10`
	);

	if (booksFound?.numFound !== 0) return booksFound;

	console.error("No Books Found!");
}

async function SearchSubjects(query: string) {
	return "";
}

export { SearchTitleAuthor, SearchSubjects };
