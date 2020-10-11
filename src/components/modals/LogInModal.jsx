import LogInForm from "../pages/account/LogInForm";
import { ModalBody } from "react-bootstrap";
import React from "react";

export default function LogInModal(props) {
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
            <LogInForm />
          </ModalBody>
        </div>
      </div>
    </div>
  );
}
