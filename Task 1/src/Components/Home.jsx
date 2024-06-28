import React from "react";
import "./Home.css";
// import { useDispatch } from "react-redux";
import { register } from "../../src/services/operations/register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  console.log("Home");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("handleOnSubmit");
    await register(name, email, password, navigate);
  };

  return (
    <div className="background-radial-gradient">
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>

      <section className="text-center">
        <div
          id="radius-shape-1"
          className="position-absolute rounded-circle shadow-5-strong"
        ></div>
        <div
          id="radius-shape-2"
          className="position-absolute shadow-5-strong"
        ></div>
        <div id="card" className="card mx-9 lg-12 mx-md-5 shadow-5-strong">
          <div className="card-body px-md-5 align-left">
            <h2 className="fw-bold mb-5">Registration Form</h2>
            <form onSubmit={handleOnSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1">
                  Name
                </label>
                <input
                  value={name}
                  onChange={handleOnChange}
                  type="text"
                  id="form3Example1"
                  name="name"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={handleOnChange}
                  type="email"
                  id="form3Example3"
                  name="email"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  value={password}
                  onChange={handleOnChange}
                  type="password"
                  id="form3Example4"
                  name="password"
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
