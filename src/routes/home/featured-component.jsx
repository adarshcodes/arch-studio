import React from "react";

import Button from "../../components/button.component";

function Featured() {
	return (
		<section className="featured-section">
			<div className="featured-title-part">
				<h3 className="heading-m">Featured</h3>
				<Button btn={`See All`} linkedTo={"/portfolio"} />
			</div>
		</section>
	);
}

export default Featured;
