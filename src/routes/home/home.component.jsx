import React from "react";

// importing components
import Pagination from "../../components/pagination.component";
import Hero from "./hero.component";

export default function Home() {
	return (
		<div className="home-container">
			<Pagination page={"home"} />
			<Hero />
		</div>
	);
}
