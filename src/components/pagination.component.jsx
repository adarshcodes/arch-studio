import React from "react";

export default function Pagination(props) {
	return (
		<div className="pagename">
			<span className="pagename__line"></span>
			<p className="pagename__page">{props.page}</p>
		</div>
	);
}
