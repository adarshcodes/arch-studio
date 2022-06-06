import React from "react";
import Arrow from "../../assets/images/icons/icon-arrow.svg";

function ViewButton() {
	return (
		<div className="view-btn">
			View On Map <img src={Arrow} alt="arrow" className="arrow-icon" />
		</div>
	);
}

export default ViewButton;
