import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Button from "../../components/button.component";

function Footer() {
	return (
		<Fragment>
			<footer className="footer">
				<Link className="footer__logo" to="/">
					<Logo />
				</Link>
				<ul className="footer__list">
					<li className="footer__list-item">
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li className="footer__list-item">
						<Link to="/about-us">About Us</Link>
					</li>
					<li className="footer__list-item">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<Button btn="See Our Portfolio" linkedTo="/portfolio" />
			</footer>
		</Fragment>
	);
}

export default Footer;
