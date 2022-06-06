import React from "react";

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
				<span className="heading-xl big-span">{title}</span>
				<div className="about-hero__content--description about-content">
					<div className="bar"></div>
					<h3 className="heading-m">{heading}</h3>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
}

export default AboutHero;
