import React, { useEffect } from "react";
import Helmet from "react-helmet";

// importing components
import Pagination from "../../components/pagination.component";
import AboutHero from "../../components/aboutHero.component";

// importing images
import hero from "../../assets/images/contact/image-hero.jpg";
import heroMob from "../../assets/images/contact/image-hero-mob.jpg";
import heroTab from "../../assets/images/contact/image-hero-tab.jpg";

const heroData = {
	image: {
		mobile: heroMob,
		tablet: heroTab,
		desktop: hero,
	},
	title: "Contact",
	heading: "Tell us about your project",
	desc: "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
};

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Helmet>
				<title>Arch Studio | Contact Us</title>
			</Helmet>
			<Pagination page={"contact"} />
			<AboutHero
				image={heroData.image}
				title={heroData.title}
				heading={heroData.heading}
				desc={heroData.desc}
			/>
		</div>
	);
}
