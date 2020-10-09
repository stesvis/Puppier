import * as formService from "../../services/formService";

import { Alert, Button, Col, Form, ModalBody, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import InputWithIcon from "../common/InputWithIcon";
import Joi from "joi-browser";
import React from "react";
import apiService from "../../services/api/apiService";
import logService from "../../services/logService";
import { useState } from "react";

//#region Helpers
const initialState = {
  account: { name: "", username: "", password: "", password_confirmation: "" },
  errors: {},
  isBusy: false,
};

const schema = {
  name: Joi.string().required().min(3).max(30).label("Full name"),
  username: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .label("Email"),
  password: Joi.string()
    // .regex(new RegExp("^[a-zA-Z0-9]{3,20}$"))
    .required()
    .min(6)
    .label("Password"),
  password_confirmation: Joi.any()
    // TODO: pass "password" to validateField()!
    .valid(Joi.ref("password"))
    .required()
    .label("Password confirmation")
    .options({ language: { any: { allowOnly: "!!Passwords do not match" } } }),
};
//#endregion

export default function SignUpFormModal(props) {
  const [state, setState] = useState(initialState);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { account } = state;

    const errors = formService.validate(account, schema);
    if (errors) {
      const newState = { ...state, errors: errors };
      setState(newState);
      return;
    }

    // reset the errors
    const newState = { ...state, errors: {}, isBusy: true };
    setState(newState);

    try {
      await apiService.users.register(
        account.name,
        account.username,
        account.password,
        account.password_confirmation
      );
      await apiService.auth.login(account.username, account.password);
      // toast.success("Success!");

      // close the modal
      const $ = window.$;
      $("#login").modal("hide");

      await apiService.users.me();

      setState({ ...state, isBusy: false });
      // reload the current page
      history.go(0);
    } catch (error) {
      // toast.error(error.response.data.data.message);
      if (error.response) {
        const newState = {
          ...state,
          errors: {
            ...state.errors,
            general: logService.extractErrorMessage(error),
          },
          isBusy: false,
        };
        setState(newState);
      }
    }
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    const { name, value } = event.target;
    let fieldError = formService.validateField(name, value, schema);

    // TODO: this is just a hack
    if (name === "password_confirmation" && value === state.account.password) {
      fieldError = "";
    }

    const newState = {
      ...state,
      account: {
        ...state.account,
        [name]: value,
      },
      errors: { ...state.errors, [name]: fieldError },
    };
    setState(newState);
  };

  const { account, errors, isBusy } = state;

  return (
    <div
      className="modal fade signup"
      id="signup"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="sign-up">
      <div
        className="modal-dialog modal-dialog-centered login-pop-form"
        role="document">
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
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        name="name"
                        type="text"
                        placeholder="Full name"
                        icon="ti-user"
                        value={account.name}
                        onChange={handleOnChange}
                      />
                      <Alert
                        variant="danger"
                        show={errors.name ? errors.name.length > 0 : false}>
                        {errors.name}
                      </Alert>
                    </Form.Group>
                  </Col>

                  {/* <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="text"
                        placeholder="Last name"
                        icon="ti-user"
                      />
                    </Form.Group>
                  </Col> */}

                  {/* <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        type="text"
                        placeholder="Username"
                        icon="ti-user"
                      />
                    </Form.Group>
                  </Col> */}

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        name="username"
                        type="email"
                        placeholder="Email"
                        icon="ti-email"
                        value={account.username}
                        onChange={handleOnChange}
                      />
                      <Alert
                        variant="danger"
                        show={
                          errors.username ? errors.username.length > 0 : false
                        }>
                        {errors.username}
                      </Alert>
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon="ti-unlock"
                        value={account.password}
                        onChange={handleOnChange}
                      />
                      <Alert
                        variant="danger"
                        show={
                          errors.password ? errors.password.length > 0 : false
                        }>
                        {errors.password}
                      </Alert>
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6}>
                    <Form.Group>
                      <InputWithIcon
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                        icon="ti-unlock"
                        value={account.password_confirmation}
                        onChange={handleOnChange}
                      />
                      <Alert
                        variant="danger"
                        show={
                          errors.password_confirmation
                            ? errors.password_confirmation.length > 0
                            : false
                        }>
                        {errors.password_confirmation}
                      </Alert>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <Button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                    disabled={isBusy}>
                    {isBusy ? "Loading..." : "Sign Up"}
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
