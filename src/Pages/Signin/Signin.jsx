import React, { useState } from "react";
import "../Signin/Signin.css";
import g10 from "../../assets/images/g10.png";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import signin from "../../assets/images/Signin.png";

const Signin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleLogin = () => {
    const { email, password } = userData;
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const fakeToken = `Bearer ${btoa(
      userData.email + ":" + userData.password
    )}`;
    localStorage.setItem("authtoken", fakeToken);
    setTimeout(() => {
      navigate(`/${i18n.language}/home`);
    }, 1000);
  };

  return (
    <>
      {
        <>
          <Col className="col-12 bg-white shadow-lg rounded-3 d-none d-sm-block scroll-height ">
            <div
              className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 "
              style={{ maxHeight: "500px" }}
            >
              <p className="py-4 my-4 text-center screen-1 fw-bold">
                {t("sign_in_title")}
              </p>
              <h5 className="text-center">{t("sign_in_h5_0")}</h5>
              <h5 className="text-center mx-auto sign-para">
                {t("sign_in_h5_1")}
                {t("sign_in_h5_2")}
                {t("sign_in_h5_3")}
              </h5>
              <h5 className="text-center py-3 fw-bold">
                {t("sign_in_subtitle")}
              </h5>
              <div className="d-flex justify-content-center pb-md-0 pb-5">
                <div
                  className="d-flex flex-column gap-3 w-100"
                  style={{ maxWidth: "400px" }}
                >
                  <img src={g10} alt="" className="w-100 d-block d-sm-none" />
                  <p className="table-head text-md-center mb-0">
                    {t("sign_in_in_label")}
                  </p>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder={t("user_email")}
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="py-2 px-3 border border-secondary border-opacity-25 rounded-1 w-100"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Control
                      type="password"
                      placeholder={t("user_password")}
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      className="py-2 px-3 border border-secondary border-opacity-25 rounded-1 w-100"
                      required
                    />
                  </Form.Group>

                  {error && <p className="text-danger">{error}</p>}

                  <button
                    className="mx-auto hdr_btn w-50 rounded-pill text-white border-0"
                    onClick={handleLogin}
                  >
                    <span className="text-decoration-none text-white">
                      {t("sign_in_btn")}
                    </span>
                  </button>
                  <img src={g10} alt="" className="w-100 d-none d-sm-block" />
                </div>
              </div>
            </div>
          </Col>
          {/** mobile screen */}
          <div
            className="container-fluid d-block d-sm-none p-0 position-fixed"
            style={{
              height: "100vh",
              background: "linear-gradient(180deg, #1CA78D, #75C2A8)",
            }}
          >
            <img
              src={signin}
              alt="signin"
              className="position-absolute top-0 start-50 translate-middle-x w-100 h-auto"
              style={{ maxWidth: "100vw", marginTop: "30px" }}
            />
            <div
              className="position-absolute start-50 translate-middle w-75  shadow-lg my-3 bg-white rounded-4 text-center overflow-y-auto overflow-x-hidden custom-scrollbar"
              style={{ height: "600px", top: "40%" }}
            >
              <div className="col-12 bg-white shadow-lg rounded-3">
                <div className="p-3">
                  <p className="py-4 my-4 text-center screen-1 fw-bold">
                    {t("sign_in_title")}
                  </p>
                  <h5 className="text-center">{t("sign_in_h5_0")}</h5>
                  <h5 className="text-center mx-auto sign-para">
                    {t("sign_in_h5_1")}
                    {t("sign_in_h5_2")}
                    {t("sign_in_h5_3")}
                  </h5>
                  <h5 className="text-center py-3 fw-bold">
                    {t("sign_in_subtitle")}
                  </h5>
                  <div className="d-flex justify-content-center pb-md-0 pb-5">
                    <div
                      className="d-flex flex-column gap-3 w-100"
                      style={{ maxWidth: "400px" }}
                    >
                      <img src={g10} alt="" className="w-100 d-block" />
                      <p className="table-head text-md-center mb-0">
                        {t("sign_in_in_label")}
                      </p>
                      <Form.Group controlId="formEmail">
                        <Form.Control
                          type="email"
                          placeholder={t("user_email")}
                          name="email"
                          value={userData.email}
                          onChange={handleChange}
                          className="py-2 px-3 border border-secondary border-opacity-25 rounded-1 w-100"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="formPassword">
                        <Form.Control
                          type="password"
                          placeholder={t("user_password")}
                          name="password"
                          value={userData.password}
                          onChange={handleChange}
                          className="py-2 px-3 border border-secondary border-opacity-25 rounded-1 w-100"
                          required
                        />
                      </Form.Group>

                      {error && <p className="text-danger">{error}</p>}

                      <button
                        className="mx-auto hdr_btn w-50 rounded-pill text-white border-0"
                        onClick={handleLogin}
                      >
                        <span className="text-decoration-none text-white">
                          {t("sign_in_btn")}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Signin;
