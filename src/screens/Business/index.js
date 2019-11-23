import React from 'react';
import Landing from './landing';
import Membership from './membership';

export default class BusinessDashboard extends React.Component {
	render() {
		return (
			<div>
				<Landing />
				<Membership />
			</div>
		);
	}
}
