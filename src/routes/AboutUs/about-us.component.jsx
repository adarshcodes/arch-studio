import React from "react";
import Helmet from "react-helmet";

// importing components
import Pagination from "../../components/pagination.component";

export default function AboutUs() {
	return (
		<div>
			<Helmet>
				<title>Arch Studio | About Us</title>
			</Helmet>
			<Pagination page={"about us"} />
		</div>
	);
}
