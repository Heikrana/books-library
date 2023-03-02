import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function createListOfSubjects() {
	const predefinedSubject = [
		"JavaScript",
		"Harry Potter",
		"Indian Tradition",
		"Cryptocurrency",
		"Criminal Law",
	];

	return predefinedSubject.map((subject, idx) => {
		return (
			<li key={idx}>
				<Link to={subject.toLowerCase()}>{subject}</Link>
			</li>
		);
	});
}

function Sidebar({ setQuery }: { setQuery: (value: string) => void }) {
	const list = createListOfSubjects();
	const [formData, setFormData] = useState("");

	useEffect(() => {
		if (formData) setQuery(formData);
	}, [formData]);

	return (
		<>
			<div>
				<h2>
					<Link to="/">Home</Link>
				</h2>
				<h1>Trending Subjects</h1>
				<SearchBar
					placeholder="Search Subject"
					setFormData={setFormData}
				/>
				<ul>{list}</ul>
			</div>
		</>
	);
}

export default Sidebar;
