import { Button, Form, FormGroup, ModalBody } from "react-bootstrap";

import InputWithIcon from "../InputWithIcon";
import { Link } from "react-router-dom";
import React from "react";

// import ModalContext from "../../context/modalContext";

export default function LogInForm(props) {
  // const modalContext = useContext(ModalContext);

  return (
    <div
      className="modal fade"
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registermodal"
    >
      <div
        className="modal-dialog modal-dialog-centered login-pop-form"
        role="document"
      >
        <div className="modal-content" id="registermodal">
          <span
            className="mod-close"
            data-dismiss="modal"
            // onClick={(e) => modalContext.onModalToggled(e, "login", false)}
          >
            <i className="ti-close"></i>
          </span>
          <ModalBody>
            <h4 className="modal-header-title">
              Log <span className="theme-cl">In</span>
            </h4>
            <div className="login-form">
              <Form>
                <Form.Group>
                  <Form.Label>User Name</Form.Label>
                  <InputWithIcon
                    type="text"
                    placeholder="Username"
                    icon="ti-user"
                  />
                </Form.Group>

                <FormGroup>
                  <Form.Label>Password</Form.Label>
                  <InputWithIcon
                    type="password"
                    placeholder="*******"
                    icon="ti-user"
                  />
                </FormGroup>

                <FormGroup>
                  <Button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                  >
                    Login
                  </Button>
                </FormGroup>
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
                <Link to="#" className="link">
                  Forgot password?
                </Link>
              </p>
            </div>
          </ModalBody>
        </div>
      </div>
    </div>
  );
}
