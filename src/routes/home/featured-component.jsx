import React from "react";

import Button from "../../components/button.component";

import FeaturedCard from "../../components/featuredCard.component";

// importing images
import delSol from "../../assets/images/portfolio/image-del-sol.jpg";
import delSolTab from "../../assets/images/portfolio/image-del-sol-tab.jpg";
import delSolMob from "../../assets/images/portfolio/image-del-sol-mob.jpg";

import bTower from "../../assets/images/portfolio/image-228b.jpg";
import bTowerTab from "../../assets/images/portfolio/image-228b-tab.jpg";
import bTowerMob from "../../assets/images/portfolio/image-228b-mob.jpg";

import leProto from "../../assets/images/portfolio/image-prototype.jpg";
import leProtoTab from "../../assets/images/portfolio/image-prototype-tab.jpg";
import leProtoMob from "../../assets/images/portfolio/image-prototype-mob.jpg";

const featuredData = [
	{
		id: 1,
		title: "Project Del Sol",
		image: {
			mobile: delSolMob,
			tablet: delSolTab,
			desktop: delSol,
		},
	},
	{
		id: 2,
		title: "228B Tower",
		image: {
			mobile: bTowerMob,
			tablet: bTowerTab,
			desktop: bTower,
		},
	},
	{
		id: 3,
		title: "Le Prototype",
		image: {
			mobile: leProtoMob,
			tablet: leProtoTab,
			desktop: leProto,
		},
	},
];

function Featured() {
	return (
		<section className="featured-section">
			<div className="featured-title-part">
				<h3 className="heading-m">Featured</h3>
				<Button btn={`See All`} linkedTo={"/portfolio"} />
			</div>
			<div className="featured-cards-container">
				{featuredData.map((card) => (
					<FeaturedCard
						key={card.id}
						id={card.id}
						title={card.title}
						img={card.image.desktop}
						imgTab={card.image.tablet}
						imgMob={card.image.mobile}
						link={"/portfolio"}
						subtitle={"View All Projects"}
					/>
				))}
			</div>
			<Button btn={`See All`} linkedTo={"/portfolio"} />
		</section>
	);
}

export default Featured;
