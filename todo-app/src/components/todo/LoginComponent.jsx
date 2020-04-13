import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {
        // if (this.state.username === 'admin' && this.state.password === 'admin') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     // this.setState({ showSuccessMessage: true, hasLoginFailed: false })
        // } else {
        //     this.setState({ showSuccessMessage: false, hasLoginFailed: true })
        // }

        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password).then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)
                this.setState({ showSuccessMessage: true, hasLoginFailed: false })
            }).catch(() => {
                this.setState({ showSuccessMessage: false, hasLoginFailed: true })
            })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}

                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}

                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className='btn btn-success' onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent