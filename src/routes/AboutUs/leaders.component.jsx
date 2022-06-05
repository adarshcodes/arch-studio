import React from "react";

import LeaderCard from "./leaderCard.component";

// importing images
import AvatarJake from "../../assets/images/about/avatar-jake.jpg";
import AvatarThompson from "../../assets/images/about/avatar-thompson.jpg";
import AvatarJackson from "../../assets/images/about/avatar-jackson.jpg";
import AvatarMaria from "../../assets/images/about/avatar-maria.jpg";

const leadersData = [
	{
		id: 1,
		avatar: AvatarJake,
		name: "Jake Richards",
		role: "Chief Architect",
	},
	{
		id: 2,
		avatar: AvatarThompson,
		name: "Thompson Smith",
		role: "Head of Finance",
	},
	{
		id: 3,
		avatar: AvatarJackson,
		name: "Jackson Rourke",
		role: "Lead Designer",
	},
	{
		id: 4,
		avatar: AvatarMaria,
		name: "Maria Simpson",
		role: "Senior Architect",
	},
];

function Leaders() {
	return (
		<div className="leaders-container">
			<h3 className="heading-m">
				The <br /> Leaders
			</h3>
			<div className="leaders-cards-container">
				{leadersData.map((leader) => (
					<LeaderCard
						key={leader.id}
						avatar={leader.avatar}
						name={leader.name}
						role={leader.role}
					/>
				))}
			</div>
		</div>
	);
}

export default Leaders;
