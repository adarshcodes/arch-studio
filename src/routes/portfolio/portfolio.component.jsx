import React, { useEffect } from "react";
import Helmet from "react-helmet";

// importing components
import Pagination from "../../components/pagination.component";
import PortfolioCard from "../../components/portfolioCard.component";
import projectsData from "./projectsData";

export default function Portfolio() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Helmet>
				<title>Arch Studio | Portfolio</title>
			</Helmet>
			<Pagination page={"portfolio"} />
			<div className="portfolio-container">
				{projectsData.map((card) => (
					<PortfolioCard
						key={card.id}
						id={card.id}
						title={card.title}
						img={card.image.desktop}
						imgTab={card.image.tablet}
						imgMob={card.image.mobile}
						date={card.date}
					/>
				))}
			</div>
		</div>
	);
}
