import React from "react";

function LeaderCard({ avatar, name, role }) {
	return (
		<div className="leader-card">
			<div className="leader-avatar">
				<img src={avatar} alt="avatar" />
				<div className="socialicons">
					<a
						href="https://www.linkedin.com/in/adarshofficial/"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-linkedin"></i>
					</a>
					<a
						href="https://twitter.com/ideallyadarsh"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-twitter"></i>
					</a>
				</div>
			</div>
			<h5 className="heading-s">{name}</h5>
			<p className="leader-role">{role}</p>
		</div>
	);
}

export default LeaderCard;
