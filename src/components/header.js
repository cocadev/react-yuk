import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem(props) {
    return (
        <li>
            <Link to='/'>{props.title}</Link>
        </li>
    )
}

export default class Header extends React.Component {

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
                                        <MenuItem title={'add your business'} />
                                        <MenuItem title={'login'} />
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
            </header>
        )
    }
}