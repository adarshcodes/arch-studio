import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import ham from "../../assets/images/icons/icon-hamburger.svg";
import close from "../../assets/images/icons/icon-close.svg";

export default function Navigation() {
	const [hamVisible, setHamVisible] = React.useState(false);

	function hamshow() {
		setHamVisible(!hamVisible);
	}

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

				<img
					src={!hamVisible ? ham : close}
					alt="hamburger"
					className="ham"
					onClick={hamshow}
				/>

				<div className={`ham-nav ${hamVisible ? "toggle-ham" : null}`}>
					<ul className="navbar__list ham__list">
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
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
}
