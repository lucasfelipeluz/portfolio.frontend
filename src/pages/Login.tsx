import React from 'react';
import { LoginContainer, LoginForm, LoginMainContainer, LoginSideBar } from '../style/Login';

export default function Login() {
  return (
    <LoginContainer>
      <LoginSideBar className="sidenav">
        <div className="login-main-text">
          <h2>
            <strong>Portfolio</strong>
            <br /> Administrator Page
          </h2>
        </div>
      </LoginSideBar>
      <LoginMainContainer className="main">
        <div className="col-md-6 col-sm-12">
          <LoginForm className="login-form">
            <form>
              <div className="form-group">
                <label>User</label>
                <input type="text" className="form-control" placeholder="User Name" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </LoginForm>
        </div>
      </LoginMainContainer>
    </LoginContainer>
  );
}
