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
    } catch (ex) {
      // if (ex.response) {
      //   toast.error(logService.extractErrorMessage(ex));
      // }
    } finally {
      window.location = Routes.home;
    }
  };

  useEffect(() => {
    logOut();
  }, []);

  return (
    <section className="gray" style={{ padding: "100px 0" }}>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h5 className="modal-header-title text-center">Logging Out...</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
