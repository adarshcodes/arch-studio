import React from "react";

export default function Pagination(props) {
	return (
		<div className="pagename-animator">
			<div className="pagename">
				<div className="pagename__line"></div>
				<p className="pagename__page">{props.page}</p>
			</div>
		</div>
	);
}
