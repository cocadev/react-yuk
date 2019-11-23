import React from 'react';

export default class Landing extends React.Component {
	render() {
		return (
			<div>
				<section className="section-slide">
					<div className="wrap-slick1">
						<div className="slick1">
							<div className="item-slick2" style={{ backgroundImage: `url('images/back2.jpg')` }}>
								<div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-15 p-b-17">
									<div className="caption1-slide1 txt45 t-center m-t-30">
										Find the Plan That’s Right for You
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
