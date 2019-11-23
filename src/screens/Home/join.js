import React from 'react';

function JoinItem(props) {
	return (
		<div className="col-md-3 p-t-30">
			<div className="ab-center size40 hov-pointer m-l-r-auto m-t-43 m-b-23">
				<div className="flex-c-m sizefull bo-cir bgsky color4 hov1 trans-0-4">
					<i className={`fa ${props.icon} fs-30 m-l-2`} />
				</div>
			</div>
			<div className="p-t-35 text-center">
				<p className="txt26">{props.title}</p>
			</div>
		</div>
	);
}

export default class Join extends React.Component {
	render() {
		return (
			<div className="content-intro bg3 p-t-77 p-b-40 ">
				<div className="container">
					<div className="row">
						<div className="col-md-12 p-t-35 text-center">
							<p className="txt36"> Why you should join blaqcheck </p>
							<p className="txt25"> you will get a huge return on your investment </p>
						</div>

						<JoinItem icon={'fa fa-angellist'} title={'10K + active users, 100 new daily accounts'} />
						<JoinItem
							icon={'fa-location-arrow'}
							title={'Active community of reviews with over 2000+ new monthly reviews'}
						/>
						<JoinItem icon={'fa fa-shopping-bag'} title={'highest ROI Rate, highest click rate'} />
						<JoinItem
							icon={'fa fa-microphone'}
							title={'create your business profile for strong Brand Building'}
						/>
						<JoinItem
							icon={'fa fa-bullhorn'}
							title={'active blog with contributions from top professionals in the industry'}
						/>
						<JoinItem icon={'fa fa-camera'} title={'provide pictures of your work'} />
						<JoinItem icon={'fa fa-soccer-ball-o'} title={'leave professional tips for others'} />
						<JoinItem
							icon={'fa-location-arrow'}
							title={'take off with more exposure and book More Reservations'}
						/>

						<div className="col-md-12 p-t-120 text-center">
							<p className="txt37">find the best businesses in town</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
