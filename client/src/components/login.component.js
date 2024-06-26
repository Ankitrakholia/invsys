import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/dashboard");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row login-background d-flex align-content-center justify-content-center flex-wrap">
                    <div className="col-12 col-sm-5 col-xl-3">
                        <div className="card shadow-lg border-0 rounded-lg login-card">
                            <h3 className="text-center font-weight-normal my-4">
                                Login
                            </h3>

                            <div className="card-body">
                                <Form
                                    onSubmit={this.handleLogin}
                                    ref={c => {
                                        this.form = c;
                                    }}
                                >
                                    <div className="form-group">
                                        <label className="small mb-1" htmlFor="username">Username</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Enter username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                            validations={[required]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="small mb-1" htmlFor="password">Password</label>
                                        <Input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter password"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                            validations={[required]}
                                        />
                                    </div>

                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <button
                                            className="btn btn-primary"
                                            disabled={this.state.loading}
                                        >
                                            {this.state.loading && (
                                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            )}

                                            Login
                                        </button>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between mt-2 mb-0">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYzinG7VCtGK40D2upxYz0PlFm0Ww5hjgoFr7yQbFIFIf4xw/viewform?usp=sf_link " className="text-primary text-decoration-none">
                                            <p><small>Don't have an account? Contact Us</small></p>
                                        </a>
                                    </div>

                                    {this.state.message && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {this.state.message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={c => {
                                            this.checkBtn = c;
                                        }}
                                    />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}