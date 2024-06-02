import React, { useState } from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    http.post("users", value).then((res) => {
      navigate("/home");
    });
  };

  return (
    <div className="container">
      <h1>Create User</h1>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
