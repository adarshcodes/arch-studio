import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/images/icons/icon-arrow.svg";

export default function Button(props) {
	return (
		<Link to={`${props.linkedTo}`}>
			<div className="button">
				{props.btn}
				<img src={Arrow} alt="arrow" className="arrow-icon" />
			</div>
		</Link>
	);
}
