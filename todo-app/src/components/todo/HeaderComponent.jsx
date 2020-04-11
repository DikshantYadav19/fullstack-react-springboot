import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class HeaderComponent extends Component {
    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn)

        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='https://github.com/DikshantYadav19' className='navbar-brand'>Dikshant's</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedIn && <li><Link className='nav-link' to='/welcome/user'>Home</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to='/todos'>Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isUserLoggedIn && <li><Link className='nav-link' to='/login'>Login</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to='/logout' onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)