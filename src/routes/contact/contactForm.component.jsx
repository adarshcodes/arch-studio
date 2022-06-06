import React from "react";

import Button from "../../components/button.component";

function ContactForm() {
	return (
		<div className="contact-form-container">
			<div className="bar-heading about-content">
				<h3 className="heading-m">Connect with us</h3>
			</div>
			<form className="contact-form">
				<div class="contact-input">
					<input
						class="input-field input"
						type="text"
						placeholder="Name"
						required
					/>
					<span class="focus-border"></span>
				</div>
				<div class="contact-input">
					<input
						class="input-field input"
						type="email"
						placeholder="Email"
						required
					/>
					<span class="focus-border"></span>
				</div>
				<div class="contact-input">
					<textarea class="input-field input" placeholder="Message" required />
					<span class="focus-border"></span>
				</div>
				<Button linkedTo={"#"} />
			</form>
		</div>
	);
}

export default ContactForm;
