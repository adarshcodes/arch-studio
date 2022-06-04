import React from "react";

function PortfolioCard(props) {
	return (
		<div>
			<div className="portfolio-card portfolio-page-card">
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
					<span className="portfolio-link portfolio-date">{props.date}</span>
				</div>
			</div>
		</div>
	);
}

export default PortfolioCard;
