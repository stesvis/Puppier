import { Alert, Button, Form, FormGroup, ModalBody } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import InputWithIcon from "../InputWithIcon";
import React from "react";
import apiService from "../../services/api/apiService";
import { toast } from "react-toastify";
import { useReducer } from "react";

// import ModalContext from "../../context/modalContext";
const initialState = {
  username: "",
  password: "",
  error: "",
  isBusy: false,
};

const formReducer = (prevState, action) => {
  switch (action.type) {
    case "onChange":
      return {
        ...prevState,
        [action.payload.fieldName]: action.payload.value,
      };

    case "onSubmit":
      return { ...prevState, isBusy: true };

    case "onSuccess":
      toast.success(`Welcome ${prevState.username}`);
      const $ = window.$;
      $("#login").modal("hide");
      return { ...prevState, error: "", isBusy: false };

    case "onError":
      return {
        ...prevState,
        error: action.payload.value,
        isBusy: false,
      };

    default:
      return prevState;
  }
};

export default function LogInForm(props) {
  // const modalContext = useContext(ModalContext);
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { username, password, error, isBusy } = state;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "onSubmit",
    });

    try {
      await apiService.auth.login(username, password);
      await apiService.users.me();
      window.location.reload();
      // history.go(0);

      dispatch({
        type: "onSuccess",
      });
    } catch (error) {
      // toast.error(error.response.data.data.message);
      dispatch({
        type: "onError",
        payload: { value: error.response && error.response.data.data.message },
      });
    }
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    const { name, value } = event.target;

    dispatch({
      type: "onChange",
      payload: {
        fieldName: name,
        value: value,
      },
    });
  };

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
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>User Name</Form.Label>
                  <InputWithIcon
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    icon="ti-user"
                    onChange={handleOnChange}
                  />
                </Form.Group>

                <FormGroup>
                  <Form.Label>Password</Form.Label>
                  <InputWithIcon
                    type="password"
                    name="password"
                    placeholder="*******"
                    value={password}
                    icon="ti-user"
                    onChange={handleOnChange}
                  />
                </FormGroup>

                <Alert variant="danger" show={error.length > 0}>
                  {error}
                </Alert>

                <FormGroup>
                  <Button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                    disabled={isBusy}
                  >
                    {isBusy ? "Loading..." : "Log In"}
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
