import React from 'react';

function WelcomeItem(props) {
	return (
		<div className="col-md-4 p-t-30">
			<div className="ab-center size39 hov-pointer m-l-r-auto m-t-43 m-b-33">
				<div className="flex-c-m sizefull bo-cir bgsky color4 hov1 trans-0-4">
					<i className={`fa ${props.icon} fs-50 m-l-2`} />
				</div>
			</div>
			<div className="p-t-35 text-center">
				<p className="txt26">{props.title}</p>
			</div>
		</div>
	);
}

export default class Welcome extends React.Component {
	render() {
		return (
			<div className="content-intro bg-white p-t-77 p-b-133">
				<div className="container">
					<div className="row">
						<div className="col-md-12 p-t-35 text-center">
							<p className="txt36"> Welcome to Blaqcheck </p>
							<p className="txt25"> Why you should join a growing network of enthusiastists </p>
						</div>

						<WelcomeItem icon={'fa-location-arrow'} title={'List your Own business'} />
						<WelcomeItem
							icon={'fa-comment'}
							title={
								'Review and recommend places that you visited share your feedling, your experiences and earn Praises'
							}
						/>
						<WelcomeItem
							icon={'fa-frown-o'}
							title={'Be a part of a growing Community, with thousands of enthusiast, just like you'}
						/>
					</div>
				</div>
			</div>
		);
	}
}
