import React from "react";
import { Link } from "react-router-dom";

import Arrow from "../assets/images/icons/icon-arrow.svg";

function FeaturedCard(props) {
	return (
		<div className="portfolio-card">
			<picture>
				<source
					srcSet={props.imgMob}
					media="(max-width: 450px)"
					type="image/jpeg"
				/>
				<source
					srcSet={props.imgTab}
					media="(max-width: 850px)"
					type="image/jpeg"
				/>
				<img src={props.img} alt="small arch" className="image-portfolio" />
			</picture>
			<span className="heading-xl portfolio-card-id">{props.id}</span>
			<div className="portfolio-card-title-container">
				<h5 className="heading-s portfolio-title">{props.title}</h5>
				<Link to={props.link}>
					<span className="portfolio-link">
						{props.subtitle}
						<img src={Arrow} alt="arrow" className="arrow-icon" />
					</span>
				</Link>
			</div>
		</div>
	);
}

export default FeaturedCard;
