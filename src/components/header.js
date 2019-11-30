import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function MenuItem(props) {
	return (
		<li>
			<Link to={props.path}>{props.title}</Link>
		</li>
	);
}

function LoginItem(props) {
	return (
		<li onClick={() => props.onLogin()}>
			<Link to='/'>{props.title}</Link>
		</li>
	);
}

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false,
			check: 0
		};
		this.openModal = this.openModal.bind(this);

		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false, check: 0 });
	}

	loginView() {
		return (
			<div className="p-20">
				<p className="ft20">Login</p>

				<div className="m-t-20">
					<p className="ft13">Use a social account for faster login or easy registration.</p>
					<div className="flex-col m-t-12">
						<button type="submit" className="btn6 flex-c-m size42 txt11 trans-0-4 m-r-5">
							<i className="fab fa-facebook c-white m-r-15 ft30" aria-hidden="true" />
							Log in with Facebook
						</button>
						<button type="submit" className="btn7 flex-c-m size42 txt11 trans-0-4 m-r-5">
							<i className="fab fa-twitter c-white m-r-15 ft24" aria-hidden="true" />
							Log in with Twitter
						</button>
					</div>
				</div>

				<div className="m-t-20 flex-c-m m-b-10">
					<div className="hr0 sizefull m-r-15" />
					<div className="ft14"> or </div>
					<div className="hr0 sizefull m-l-15" />
				</div>
				<p className="ft13">
					Username or email address <span className="required">*</span>
				</p>

				<div className="my-input-border">
					<input type="text" className="myInput sizefull p-l-5" />
				</div>

				<p className="ft13 m-t-15">
					Password <span className="required">*</span>
				</p>

				<div className="my-input-border">
					<input type="password" className="myInput sizefull p-l-5" />
				</div>

				<div className="flex-m m-t-22 m-l-2">
					<button type="submit" className="btn8 flex-c-m trans-0-4">
						Login
					</button>
					<div className="flex-c">
						<input className="" name="rememberme" type="checkbox" id="rememberme" value="forever" />
						<p className="ft13">Remember me</p>
					</div>
				</div>

				<div className="m-t-15 flex-row">
					<div className="c-red ft13">Register</div>&nbsp;|&nbsp;
					<div className="c-red ft13">Lost your password?</div>
				</div>
			</div>
		);
	}

	signUpView() {
		return (
			<div className="p-20">
				<p className="ft20">Register</p>

				<div className="m-t-20">
					<p className="ft13">Use a social account for faster login or easy registration.</p>
				</div>

				<div className="flex-c">
					<div className="m-r-10">
						<p className="ft13">First Name</p>
						<div className="my-input-border">
							<input type="text" className="myInput sizefull p-l-5" />
						</div>
					</div>
					<div className="m-l-10">
						<p className="ft13">Last Name</p>
						<div className="my-input-border">
							<input type="text" className="myInput sizefull p-l-5" />
						</div>
					</div>
				</div>

				<p className="ft13 m-t-15">
					Email address <span className="required">*</span>
				</p>

				<div className="my-input-border">
					<input type="text" className="myInput sizefull p-l-5" />
				</div>

				<p className="ft13 m-t-15">
					Password <span className="required">*</span>
				</p>

				<div className="my-input-border">
					<input type="password" className="myInput sizefull p-l-5" />
				</div>

				<div className="flex-m m-t-22 m-l-2">
					<button type="submit" className="btn8 flex-c-m trans-0-4">
						Register
					</button>
				</div>

				<div className="m-t-15">
					<div className="c-red ft13 cursor">Login</div>
				</div>
			</div>
		);
	}

	render() {
		const { check } = this.state;
		return (
			<header>
				<div className="wrap-menu-header gradient1 trans-0-4">
					<div className="container-fluid h-full">
						<div className="wrap_header trans-0-3">
							<div className="logo">
								<Link to="">
									<img
										src="images/icons/logo.png"
										alt="IMG-LOGO"
										data-logofixed="images/icons/logo2.png"
									/>
								</Link>
							</div>

							<div className="wrap_menu">
								<nav className="menu">
									<ul className="main_menu">
										<MenuItem title={'Explore'} path={'/'} />
										<MenuItem title={'Learn'} path={'/'} />
										<MenuItem title={'Blog'} path={'/'} />
										<MenuItem title={'Add Your Business'} path={'/add-business'} />

										<LoginItem
											title={'Login'}
											onLogin={() => {
												this.openModal();
												this.setState({ check: 1 });
											}}
										/>
										<LoginItem
											title={'Sign Up'}
											onLogin={() => {
												this.openModal();
												this.setState({ check: 2 });
											}}
										/>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					ariaHideApp={false}
					contentLabel="Example Modal"
				>
					<i className="fa fa-close float-right ft24" aria-hidden="true" onClick={this.closeModal} />

					{check === 1 && this.loginView()}
					{check === 2 && this.signUpView()}
				</Modal>
			</header>
		);
	}
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		padding: '10px',
		transform: 'translate(-50%, -50%)'
	}
};
