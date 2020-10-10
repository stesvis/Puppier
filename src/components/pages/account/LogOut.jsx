import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import { Routes } from "../../../services/api/routes";
import authApiService from "../../../services/api/authApiService";
import logService from "../../../services/logService";
import { toast } from "react-toastify";

export default function LogOut() {
  const logOut = async () => {
    try {
      await authApiService.logOut();
      window.location = Routes.home;
    } catch (ex) {
      if (ex.response) {
        toast.error(logService.extractErrorMessage(ex));
      }
    }
  };

  useEffect(() => {
    logOut();
  }, []);

  return (
    <section className="gray">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <h5 className="modal-header-title">
              Logging <span className="theme-cl">Out...</span>
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
