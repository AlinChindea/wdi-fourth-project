import React from 'react';
import {Link} from 'react-router-dom';

const RegisterForm = ({handleChange, handleSubmit, user}) => {
  return(

    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-8 mx-auto">
            <div className="card border-none">
              <div className="card-body">
                <div className="mt-2 text-center">
                  <h2>Create Your Account</h2>
                </div>
                <div className="mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        placeholder="Enter full name"
                        onChange={handleChange}
                        value={user.fullname}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email" className="form-control"
                        placeholder="Enter email address"
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={user.password}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={user.passwordConfirmation}
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                  </form>
                  <div className="clearfix"></div>
                  <p className="content-divider center mt-4"><span>or</span></p>
                </div>

                <p className="text-center">
                  Already have an account? <Link to="/login">Login Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
