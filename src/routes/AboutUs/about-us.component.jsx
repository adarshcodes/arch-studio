import React, { useEffect } from "react";
import Helmet from "react-helmet";

// importing components
import Pagination from "../../components/pagination.component";
import AboutHero from "../../components/aboutHero.component";
import Heritage from "./heritage.component";
import Leaders from "./leaders.component";

// importing images
import hero from "../../assets/images/about/image-hero.jpg";
import heroMob from "../../assets/images/about/image-hero-mob.jpg";
import heroTab from "../../assets/images/about/image-hero-tab.jpg";

const heroData = {
	image: {
		mobile: heroMob,
		tablet: heroTab,
		desktop: hero,
	},
	title: "About",
	heading: "Your team of professionals",
	desc: "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
};

export default function AboutUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	console.log(heroData.title);

	return (
		<section className="about-section">
			<Helmet>
				<title>Arch Studio | About Us</title>
			</Helmet>
			<Pagination page={"about us"} />
			<AboutHero
				image={heroData.image}
				title={heroData.title}
				heading={heroData.heading}
				desc={heroData.desc}
			/>
			<Heritage />
			<Leaders />
		</section>
	);
}
