import React from "react";
import { Helmet } from "react-helmet";

// importing components
import Hero from "./hero.component";
import Welcome from "./welcome.component";
import SmallTeams from "./smallTeams.component";
import Featured from "./featured-component";
import Pagination from "../../components/pagination.component";

export default function Home() {
	return (
		<div className="home-container">
			<Helmet>
				<title>Arch Studio | Home</title>
			</Helmet>
			<Pagination page={"home"} />
			<Hero />
			<Welcome />
			<SmallTeams />
			<Featured />
		</div>
	);
}
