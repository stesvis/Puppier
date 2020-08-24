import { Link } from "react-router-dom";
import React from "react";

export default function SignUp() {
  return (
    // <!-- Sign Up Modal -->
    <div
      className="modal fade signup"
      id="signup"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="sign-up"
    >
      <div
        className="modal-dialog modal-dialog-centered login-pop-form"
        role="document"
      >
        <div className="modal-content" id="sign-up">
          <span className="mod-close" data-dismiss="modal">
            <i className="ti-close"></i>
          </span>
          <div className="modal-body">
            <h4 className="modal-header-title">
              Sign <span className="theme-cl">Up</span>
            </h4>
            <div className="login-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                        <i className="ti-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                        <i className="ti-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                        <i className="ti-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <i className="ti-email"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                        <i className="ti-unlock"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                        />
                        <i className="ti-unlock"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-divider">
              <span>Or login via</span>
            </div>
            <div className="social-login mb-3">
              <ul>
                <li>
                  <Link to="#" className="btn connect-fb">
                    <i className="ti-facebook"></i>Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn connect-twitter">
                    <i className="ti-twitter"></i>Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="mt-5">
                <i className="ti-user mr-1"></i>Already Have An Account?{" "}
                <Link to="#" className="link">
                  Go For LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- End Modal -->
  );
}
