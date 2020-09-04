import { Col, Row } from "react-bootstrap";
import React, { Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import ModalContext from "../../context/modalContext";

export default function SignUpForm(props) {
  const modalContext = useContext(ModalContext);

  return (
    <Fragment>
      <span
        className="mod-close"
        data-dismiss="modal"
        onClick={(e) => modalContext.onModalToggled(e, "signup", false)}
      >
        <i className="ti-close"></i>
      </span>
      <h4 className="modal-header-title">
        Sign <span className="theme-cl">Up</span>
      </h4>
      <div className="login-form">
        <form>
          <Row>
            <Col lg={6} md={6}>
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
            </Col>

            <Col lg={6} md={6}>
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
            </Col>

            <Col lg={6} md={6}>
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
            </Col>

            <Col lg={6} md={6}>
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
            </Col>

            <Col lg={6} md={6}>
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
            </Col>

            <Col lg={6} md={6}>
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
            </Col>
          </Row>

          <div className="form-group">
            <button type="submit" className="btn btn-md full-width pop-login">
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
    </Fragment>
  );
}
