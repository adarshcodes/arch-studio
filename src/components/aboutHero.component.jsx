import React from "react";

import img from "../assets/images/about/image-hero.jpg";

function AboutHero({ image, title, heading, desc }) {
	return (
		<div className="about-hero">
			<picture className="about-hero__img">
				<source
					srcSet={image.mobile}
					media="(max-width: 450px)"
					type="image/jpeg"
				/>
				<source
					srcSet={image.tablet}
					media="(max-width: 850px)"
					type="image/jpeg"
				/>
				<img src={image.desktop} alt="hero-about" />
			</picture>
			<div className="about-hero__content">
				<span className="heading-xl">{title}</span>
				<div className="about-hero__content--description">
					<div className="bar"></div>
					<h3 className="heading-m">{heading}</h3>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
}

export default AboutHero;
