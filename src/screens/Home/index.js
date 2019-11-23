import React from 'react';
import Landing from './landing';
import Welcome from './welcome';
import Join from './join';
import Business from './business';
import Food from './food';

export default class HomeDashboard extends React.Component {
	render() {
		return (
			<div>
				<Landing />
				<Welcome />
				<Join />
				<Food />
				<Business />
			</div>
		);
	}
}
