import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = ({handleChange, handleSubmit, user}) => {
  return(
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-8 mx-auto">
            <div className="card border-none">
              <div className="card-body">
                <div className="mt-2">
                  <img src="https://goo.gl/Gkuctm" alt="tractor" className="brand-logo mx-auto d-block img-fluid rounded-circle"/>
                </div>
                <p className="mt-4 text-white lead text-center">
                  Sign in
                </p>
                <div className="mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email address"
                        autoFocus
                        onChange={handleChange}
                        value={user.email}
                      />
                    </div>
                    <div className="form-group">
                      <input type="password"
                        name="password" className="form-control"
                        placeholder="Enter password" id="password"
                        onChange={handleChange}
                        value={user.password}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Sign in</button>
                  </form>
                  <div className="clearfix"></div>
                  <p className="content-divider center mt-4"><span>or</span></p>
                </div>
                <p className="text-center">
                  Need an account? <Link to="/register">Sign Up Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
