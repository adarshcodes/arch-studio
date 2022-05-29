import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export default function Navigation() {
	return (
		<Fragment>
			<nav className="navbar">
				<Link className="navbar__logo" to="/">
					<Logo />
				</Link>
				<ul className="navbar__list">
					<li className="navbar__list-item">
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li className="navbar__list-item">
						<Link to="/about-us">About Us</Link>
					</li>
					<li className="navbar__list-item">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</Fragment>
	);
}
