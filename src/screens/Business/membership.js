import React from 'react';

const MEMBERSHIPS = [
	{
		name: 'Basic',
		price: '6.99',
		factors: [
			'Basic Listing Submission',
			'One Listing',
			'30 Days Availability',
			'Limited Support',
			'Accept Reviews',
			'Edit Your Listing'
		]
	},
	{
		name: 'Professional',
		price: '14.99',
		factors: [
			'One Time Fee for One Listing',
			'One Listing',
			'Unlimited Availability',
			'Featured In the Results',
			'Post Deals & Promotions',
			'24/7 Service & Support'
		]
	}
];

function WelcomeItem(props) {
	return (
		<div className="col-md-5 bo2">
			<div className="p-t-25 text-center m-b-10 p-l-15 p-r-15">
				<p className="ft26 c-45">{props.item.name}</p>
				<hr />
				<p className="ft35 c-45">${props.item.price}</p>
				<hr />
				<div>
					{props.item.factors.map((subItem, index) => (
						<div key={index} className="flex-c">
							<i className={`fas fa-check-circle fs-13 m-l-2 c-main m-t-4 m-r-3`} />
							<p className="ft13 c-45">{subItem}</p>
						</div>
					))}
				</div>

				<hr />
				<button type="submit" className="btn9 size42 trans-0-4 m-t-5">
					Get Started Now
					<i className="fas fa-long-arrow-alt-right c-white m-l-10 ft12" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}

export default class Membership extends React.Component {
	render() {
		return (
			<div className="content-intro bg-white p-t-130 p-b-130">
				<div className="container">
					<div className="row flex-sa">
						{MEMBERSHIPS.map((item, index) => <WelcomeItem key={index} item={item} />)}
					</div>
				</div>
			</div>
		);
	}
}
