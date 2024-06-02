import React, { useEffect, useState } from "react";
import http from "../http";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [value, setValue] = useState({});
  console.log(value)
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    http.get("users/" + id + "/edit").then((res) => {
      setValue({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    http.put("users/"+id, value).then((res) => {
      navigate("/home");
    });
  };

  return (
    <div className="container">
      <h1>Edit User</h1>
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
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
