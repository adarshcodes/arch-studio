import React from "react";

import smallImg from "../../assets/images/home/image-small-team.jpg";
import Arrow from "../../assets/images/icons/icon-arrow.svg";
import Button from "../../components/button.component";

function SmallTeams() {
	return (
		<section className="smallTeams-section">
			<img src={smallImg} alt="small arch" className="image-small" />
			<div className="smallTeams-section__content">
				<h3 className="heading-m smallTeams-title">Small teams, big ideas</h3>
				<Button
					btn={`About Us`}
					linkedTo={"/about-us"}
					arrow={<img src={Arrow} alt="arrow" className="arrow-icon" />}
				/>
			</div>
		</section>
	);
}

export default SmallTeams;
