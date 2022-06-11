import React from "react";

import WelcomeImg from "../../assets/images/home/image-welcome.jpg";

function Welcome() {
	return (
		<section className="welcome-section">
			<span className="heading-xl bold-span">Welcome</span>
			<div className="welcome-section__content">
				<div className="welcome-section__content__text-box">
					<div className="welcome-section__content__text">
						<div className="bar"></div>

						<h3 className="heading-m welcome-title">
							Welcome to <br /> Arch Studio
						</h3>
						<p className="welcome-text">
							We have a unique network and skillset to help bring your projects
							to life. Our small team of highly skilled individuals combined
							with our large network put us in a strong position to deliver
							exceptional results.
							<br />
							<br />
							Over the past 10 years, we have worked on all kinds of projects.
							From stations to high-rise buildings, we create spaces that
							inspire and delight.
							<br />
							<br />
							We work closely with our clients so that we understand the
							intricacies of each project. This allows us to work in harmony the
							surrounding area to create truly stunning projects that will stand
							the test of time.
						</p>
					</div>
				</div>
				<div className="welcome-img-container">
					<img
						src={WelcomeImg}
						alt="architecture welcome"
						className="welcome-img"
					/>
				</div>
			</div>
		</section>
	);
}

export default Welcome;
