import React, { useEffect } from "react";
import Helmet from "react-helmet";

// importing components
import Pagination from "../../components/pagination.component";

export default function AboutUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Helmet>
				<title>Arch Studio | About Us</title>
			</Helmet>
			<Pagination page={"about us"} />
		</div>
	);
}
