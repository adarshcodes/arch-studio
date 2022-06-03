import React from "react";
import Helmet from "react-helmet";

// importing components
import Pagination from "../../components/pagination.component";

export default function Portfolio() {
	return (
		<div>
			<Helmet>
				<title>Arch Studio | Contact Us</title>
			</Helmet>
			<Pagination page={"portfolio"} />
		</div>
	);
}
