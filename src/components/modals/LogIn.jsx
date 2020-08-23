import React from "react";

export default function LogIn(props) {
  console.log(props);
  const modalClass =
    props.isVisible === "true" ? "modal fade show" : "modal fade";
  const modalStyle =
    props.isVisible === "true" ? { display: "block" } : { display: "none" };

  return (
    // <!-- Log In Modal -->
    <div
      className={modalClass}
      style={modalStyle}
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
          <span className="mod-close" data-dismiss="modal">
            <i className="ti-close"></i>
          </span>
          <div className="modal-body">
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
                  <button
                    type="submit"
                    className="btn btn-md full-width pop-login"
                  >
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
                  <a href="#" className="btn connect-fb">
                    <i className="ti-facebook"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="btn connect-twitter">
                    <i className="ti-twitter"></i>Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="mt-5">
                <a href="#" className="link">
                  Forgot password?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- End Modal -->
  );
}
