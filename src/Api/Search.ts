interface BookWithTitle {
	numFound: number;
	docs: Array<{ title: string }>;
}

interface BookWithSubject {
	work_count: number;
	works: Array<{ title: string }>;
}

async function searchByTitle(query: string) {
	let books: BookWithTitle = { numFound: 0, docs: [] };

	await fetch(
		`https://openlibrary.org/search.json?title=${query}&fields=*,availability&limit=10`
	)
		.then((res) => res.json())
		.then((res) => (books = res))
		.catch((err) => console.error(err));

	if (books.numFound == 0)
		await fetch(
			`https://openlibrary.org/search.json?author=${query}&fields=*,availability&limit=10`
		)
			.then((res) => res.json())
			.then((res) => (books = res))
			.catch((err) => console.error(err));

	return books;
}

async function searchBySubject(query: string) {
	let books: BookWithSubject = { work_count: 0, works: [] };

	await fetch(`http://openlibrary.org/subjects/${query}.json`)
		.then((res) => res.json())
		.then((res) => (books = res))
		.catch((err) => console.error(err));

	return books;
}

export { searchByTitle, searchBySubject };
