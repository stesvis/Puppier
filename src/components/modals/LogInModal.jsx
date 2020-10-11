import * as formService from "../../services/formService";

import { Alert, Button, Form, FormGroup, ModalBody } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import InputWithIcon from "../common/InputWithIcon";
import Joi from "joi-browser";
import React from "react";
import apiService from "../../services/api/apiService";
import logService from "../../services/logService";
import { useState } from "react";

//#region Helpers
const initialState = {
  account: { username: "", password: "" },
  errors: {},
  isBusy: false,
};

const schema = {
  username: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .label("Email"),
  password: Joi.string()
    // .regex(new RegExp("^[a-zA-Z0-9]{3,20}$"))
    .required()
    .label("Password"),
};
//#endregion

export default function LogInModal(props) {
  // const modalContext = useContext(ModalContext);
  const [state, setState] = useState(initialState);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = formService.validate(state.account, schema);
    if (errors) {
      const newState = { ...state, errors: errors };
      setState(newState);
      return;
    }

    // reset the errors
    const newState = { ...state, errors: {}, isBusy: true };
    setState(newState);

    try {
      await apiService.auth.logIn(
        state.account.username,
        state.account.password
      );
      // toast.success("Success!");

      await apiService.users.me();

      // close the modal
      const $ = window.$;
      $("#login").modal("hide");

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

  const handleChange = (event) => {
    // console.log("handleChange");
    const { name, value } = event.target;
    const fieldError = formService.validateField(name, value, schema);

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
      className="modal fade"
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registermodal">
      <div
        className="modal-dialog modal-dialog-centered login-pop-form"
        role="document">
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
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <InputWithIcon
                    type="text"
                    name="username"
                    placeholder="Enter your email"
                    icon="ti-user"
                    value={account.username}
                    onChange={handleChange}
                  />
                  <Alert
                    variant="danger"
                    show={errors.username ? errors.username.length > 0 : false}>
                    {errors.username}
                  </Alert>
                </Form.Group>

                <FormGroup>
                  <Form.Label>Password</Form.Label>
                  <InputWithIcon
                    type="password"
                    name="password"
                    placeholder="*******"
                    icon="ti-user"
                    value={account.password}
                    onChange={handleChange}
                  />
                  <Alert
                    variant="danger"
                    show={errors.password ? errors.password.length > 0 : false}>
                    {errors.password}
                  </Alert>
                </FormGroup>

                <FormGroup>
                  <Button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                    disabled={isBusy}>
                    {isBusy ? "Loading..." : "Log In"}
                  </Button>
                  <Alert
                    variant="danger"
                    show={errors.general ? errors.general.length > 0 : false}
                    className="mt-3">
                    {errors.general}
                  </Alert>
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
