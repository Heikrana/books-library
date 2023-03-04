import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

function formatLink(searchTerm: string) {
	return searchTerm.split(" ").join("_").toLowerCase();
}

function Navbar() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div className="nav">
				<RxHamburgerMenu className="hamburger-menu" />
				<div className="home-btn">
					<h1>
						<Link to="/">BookFreak</Link>
					</h1>
				</div>
				<Form
					action={`/book/${formatLink(searchTerm)}`}
					className="search-bar"
				>
					<input
						type="search"
						id="search-box"
						value={searchTerm}
						placeholder="Search Books by Title or Author"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<FiSearch className="search-icon" />
				</Form>
			</div>
		</>
	);
}

export default Navbar;
