import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Importing Routes
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Portfolio from "./routes/portfolio/portfolio.component";
import AboutUs from "./routes/aboutUs/aboutUs.component";
import Contact from "./routes/contact/contact.component";
import Footer from "./routes/footer/footer.component";

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className="app">
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
