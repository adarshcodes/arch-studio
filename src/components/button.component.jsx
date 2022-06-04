import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
	return (
		<Link to={`${props.linkedTo}`}>
			<div className="button">
				{props.btn}
				{props.arrow}
			</div>
		</Link>
	);
}
