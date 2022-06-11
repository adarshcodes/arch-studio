import React from "react";

import ViewButton from "./viewButton.component";

function ContactDetails() {
	return (
		<div className="contact-details">
			<div className="bar"></div>
			<div className="bar-heading about-content">
				<h3 className="heading-m">Contact Details</h3>
			</div>

			<div className="offices">
				<div className="office">
					<p className="office-title">Main Office</p>
					<p className="office-address">
						Mail: archone@mail.com
						<br />
						Address: 1892 Chenoweth Drive TN
						<br />
						Phone: 123-456-3451
					</p>
					<ViewButton />
				</div>

				<div className="office">
					<p className="office-title">Office II</p>
					<p className="office-address">
						Mail: archone@mail.com
						<br />
						Address : 3399 Wines Lane TX
						<br />
						Phone : 832-123-4321
					</p>
					<ViewButton />
				</div>
			</div>
		</div>
	);
}

export default ContactDetails;
