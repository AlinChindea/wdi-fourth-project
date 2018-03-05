import React from 'react';
import {Link} from 'react-router-dom';
import ReactFilestack from 'filestack-react';

const RegisterForm = ({handleChange, handleSubmit, handleImageUpload, errors, user}) => {
  // console.log(errors);
  const registrationIsInvalid = Object.keys(errors).some(key => errors[key]);
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
                      { errors.fullname && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.fullname}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="email" className="form-control"
                        placeholder="Enter email address"
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                      />
                      { errors.email && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.email}</p>}
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
                    <div className="form-group">
                      <label htmlFor="image">Image</label>
                      <br />
                      <ReactFilestack
                        apikey="AO99xY7O6Q56qp05Go2GFz"
                        buttonText="Upload a photo"
                        buttonClass="main-button"
                        onSuccess={handleImageUpload}
                        className="form-control"
                      />
                    </div>
                    <button disabled={registrationIsInvalid} type="submit" className="btn btn-primary btn-block">Create Account</button>
                  </form>
                  <div className="clearfix"></div>
                  <p className="content-divider center mt-4"><span>or</span></p>
                </div>
                <p className="text-center">
                  Already have an account? <Link to="/login">Login Now</Link>
                </p>
                {user.image && <div className="col-md-6">
                  <h2>Image Preview</h2>
                  <img src={user.image} className="img-fluid" />
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
