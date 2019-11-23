import React from 'react';

function MenuItem(props) {
	return (
		<li className="t-center m-b-13">
			<span className="txt19">{props.title}</span>
		</li>
	);
}

export default class Landing extends React.Component {
	render() {
		return (
			<div>
				<aside className="sidebar trans-0-4">
					<button className="btn-hide-sidebar ti-close color0-hov trans-0-4" />
					<ul className="menu-sidebar p-t-95 p-b-70">
						<MenuItem title={'explore'} />
						<MenuItem title={'learn'} />
						<MenuItem title={'blog'} />
						<MenuItem title={'add your business'} />
						<MenuItem title={'login'} />
						<MenuItem title={'sign up'} />
					</ul>
				</aside>

				<section className="section-slide">
					<div className="wrap-slick1">
						<div className="slick1">
							<div
								className="item-slick1 item1-slick1"
								style={{ backgroundImage: `url('images/back1.jpg')` }}
							>
								<div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
									<h6
										className="caption2-slide1 tit1 t-center animated visible-false m-b-37"
										data-appear="fadeInUp"
									>
										BLAQCHECK
									</h6>

									<span
										className="caption1-slide1 txt1 t-center animated visible-false m-b-30"
										data-appear="fadeInDown"
									>
										Is your crowd-sourced review site
									</span>

									<div className="bgwhite p-20 flex-c">
										<div className="landingBTN c-red tt-up fs-8 flex-l f-weight">
											what are you looking for ?
										</div>
										<div className="landingBTN c-brown tt-up fs-8 flex-l f-weight">
											select a category
											<i className="fas fa-angle-down c-blue fs-11 m-l-30" aria-hidden="true" />
										</div>
										<div className="landingBTN c-brown tt-up fs-8 flex-l f-weight">
											select a location
											<i className="fas fa-angle-down c-blue fs-11 m-l-30" aria-hidden="true" />
										</div>
										<div className="landingBTN c-brown tt-up fs-8 flex-l f-weight">
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										</div>
									</div>

									<div className="flex-c m-t-30">
										<div className="landingIcon">
											<i className="fas fa-hotel c-white fs-20" aria-hidden="true" />
											<div className="c-white fs-8 m-t-3">HOTEL</div>
										</div>
										<div className="landingIcon">
											<i className="fas fa-coffee c-white fs-20" aria-hidden="true" />
											<div className="c-white fs-8 m-t-3">RESTAURANTS</div>
										</div>
										<div className="landingIcon">
											<i className="fas fa-store c-white fs-20" aria-hidden="true" />
											<div className="c-white fs-8 m-t-3">SHOPPING</div>
										</div>
										<div className="landingIcon">
											<i className="fas fa-warehouse c-white fs-20" aria-hidden="true" />
											<div className="c-white fs-8 m-t-3">HISTORY</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
