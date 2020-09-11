import { Button, Col, Form, ModalBody, Row } from "react-bootstrap";

import InputWithIcon from "../InputWithIcon";
import { Link } from "react-router-dom";
import React from "react";

// import ModalContext from "../../context/modalContext";

export default function SignUpForm(props) {
  // const modalContext = useContext(ModalContext);

  return (
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
          <span
            className="mod-close"
            data-dismiss="modal"
            // onClick={(e) => modalContext.onModalToggled(e, "signup", false)}
          >
            <i className="ti-close"></i>
          </span>
          <ModalBody>
            <h4 className="modal-header-title">
              Sign <span className="theme-cl">Up</span>
            </h4>
            <div className="login-form">
              <Form>
                <Form.Row>
                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="text"
                        placeholder="First name"
                        icon="ti-user"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="text"
                        placeholder="Last name"
                        icon="ti-user"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="text"
                        placeholder="Username"
                        icon="ti-user"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="email"
                        placeholder="Email"
                        icon="ti-email"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="password"
                        placeholder="Password"
                        icon="ti-unlock"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="password"
                        placeholder="Confirm Password"
                        icon="ti-unlock"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Group>
                  <Button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                  >
                    Sign Up
                  </Button>
                </Form.Group>
              </Form>
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
                {/* <li>
                  <Link to="#" className="btn connect-twitter">
                    <i className="ti-twitter"></i>Twitter
                  </Link>
                </li> */}
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
          </ModalBody>
        </div>
      </div>
    </div>
  );
}
