import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';


function MenuItem(props) {
    return (
        <li>
            {props.title === 'login' && <Link onClick={() => props.onClick()}>{props.title}</Link>}
            {props.title !== 'login' && <Link to={props.path ? props.path : '/'}>{props.title}</Link>}
        </li>
    )
}

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <header>
                <div className="wrap-menu-header gradient1 trans-0-4">
                    <div className="container h-full">
                        <div className="wrap_header trans-0-3">
                            <div className="logo">
                                <Link to=''>
                                    <img src="images/icons/logo.png" alt="IMG-LOGO" data-logofixed="images/icons/logo2.png" />
                                </Link>
                            </div>

                            <div className="wrap_menu p-l-45 p-l-0-xl">
                                <nav className="menu">
                                    <ul className="main_menu">
                                        <MenuItem title={'explore'} />
                                        <MenuItem title={'learn'} />
                                        <MenuItem title={'blog'} />
                                        <MenuItem title={'add your business'} path={'/add-business'}/>
                                        <MenuItem title={'login'} onClick={() => this.openModal()} />
                                        <MenuItem title={'sign up'} />
                                    </ul>
                                </nav>
                            </div>

                            <div className="social flex-w flex-l-m p-r-20">
                                <button className="btn-show-sidebar m-l-33 trans-0-4"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <i className="fa fa-close float-right ft24" aria-hidden="true" onClick={this.closeModal}></i>

                    <div className='p-20'>
                        <p className="ft20">Login</p>

                        <div className="m-t-20">
                            <p className="ft13">Use a social account for faster login or easy registration.</p>
                            <div className="flex-col m-t-12">
                                <button type="submit" className="btn6 flex-c-m size42 txt11 trans-0-4 m-r-5">
                                    <i className="fab fa-facebook c-white m-r-15 ft30" aria-hidden="true"></i>
                                    Log in with Facebook
						        </button>
                                <button type="submit" className="btn7 flex-c-m size42 txt11 trans-0-4 m-r-5">
                                    <i className="fab fa-twitter c-white m-r-15 ft24" aria-hidden="true"></i>
                                    Log in with Twitter
						    </button>

                            </div>

                        </div>

                        <div className="m-t-20 flex-c-m m-b-10">
                            <div className='hr0 sizefull m-r-15'></div>
                            <div className='ft14'> or </div>
                            <div className='hr0 sizefull m-l-15'></div>
                        </div>
                        <p className="ft13">Username or email address <span className="required">*</span></p>

                        <div className="my-input-border">
                            <input type="text" className="myInput sizefull p-l-5" />
                        </div>

                        <p className="ft13 m-t-15">Password <span className="required">*</span></p>

                        <div className="my-input-border">
                            <input type="password" className="myInput sizefull p-l-5" />
                        </div>

                        <div className="flex-m m-t-22 m-l-2">
                            <button type="submit" className="btn8 flex-c-m trans-0-4">
                                Login
						    </button>
                            <div className="flex-c">
                                <input className="" name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                <p className='ft13'>Remember me</p>
                            </div>
                        </div>

                        <div className="m-t-15">
                            <Link to={'/'} className='c-red ft13'>Register</Link>&nbsp;|&nbsp;
				            <Link to={'/'} className='c-red ft13'>Lost your password?</Link>
                        </div>
                    </div>

                </Modal>
            </header>
        )
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
        transform: 'translate(-50%, -50%)',
    }
};