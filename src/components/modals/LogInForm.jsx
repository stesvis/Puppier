import React, { Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import ModalContext from "../../context/modalContext";

export default function LogInForm(props) {
  const modalContext = useContext(ModalContext);

  return (
    <Fragment>
      <span
        className="mod-close"
        data-dismiss="modal"
        onClick={(e) => modalContext.onModalToggled(e, "login", false)}
      >
        <i className="ti-close"></i>
      </span>
      <h4 className="modal-header-title">
        Log <span className="theme-cl">In</span>
      </h4>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>User Name</label>
            <div className="input-with-icon">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <i className="ti-user"></i>
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <input
                type="password"
                className="form-control"
                placeholder="*******"
              />
              <i className="ti-unlock"></i>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-md full-width pop-login">
              Login
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
          <Link to="#" className="link">
            Forgot password?
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
