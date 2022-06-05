import React from "react";

import heritageImg from "../../assets/images/about/image-heritage.jpg";

function Heritage() {
	return (
		<div className="heritage">
			<div className="about-hero__content--description about-content">
				<div className="bar"></div>
				<h3 className="heading-m">Our Heritage</h3>
				<p>
					Founded in 2007, we started as a trio of architects. Our complimentary
					skills and relentless attention to detail turned Arch into one of the
					most sought after boutique firms in the country.
					<br />
					<br />
					Speciliazing in Urban Design allowed us to focus on creating
					exceptional structures that live in harmony with their surroundings.
					We consider every detail from every surrounding element to inform our
					designs.
					<br />
					<br />
					Our small team of world-class professionals provides input on every
					project.
				</p>
			</div>
			<div className="heritage-img">
				<img src={heritageImg} alt="heritage" />
			</div>
		</div>
	);
}

export default Heritage;
