import React from "react";

import smallImg from "../../assets/images/home/image-small-team.jpg";
import Button from "../../components/button.component";

function SmallTeams() {
	return (
		<section className="smallTeams-section">
			<img src={smallImg} alt="small arch" className="image-small" />
			<div className="smallTeams-section__content">
				<h3 className="heading-m smallTeams-title">Small teams, big ideas</h3>
				<Button btn={`About Us`} linkedTo={"/about-us"} />
			</div>
		</section>
	);
}

export default SmallTeams;
