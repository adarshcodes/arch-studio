import React from "react";

import smallImg from "../../assets/images/home/image-small-team.jpg";
import smallImgTab from "../../assets/images/home/image-small-team-tab.jpg";
import smallImgMob from "../../assets/images/home/image-small-team-mob.jpg";
import Button from "../../components/button.component";

function SmallTeams() {
	return (
		<section className="smallTeams-section">
			<picture>
				<source
					srcSet={smallImgMob}
					media="(max-width: 450px)"
					type="image/jpeg"
				/>
				<source
					srcSet={smallImgTab}
					media="(max-width: 850px)"
					type="image/jpeg"
				/>
				<img src={smallImg} alt="small arch" className="image-small" />
			</picture>
			<div className="smallTeams-section__content">
				<h3 className="heading-m smallTeams-title">Small teams, big ideas</h3>
				<Button btn={`About Us`} linkedTo={"/about-us"} />
			</div>
		</section>
	);
}

export default SmallTeams;
