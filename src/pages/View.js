import React, { useEffect, useState } from "react";
import http from "../http";
import { Link, useNavigate, useParams } from "react-router-dom";

const View = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
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

  return (
    <div className="container">
    <div> <h1>Edit User</h1> 
    <Link to={{pathname:'/home'}}>Go Back</Link>
    </div>
      <h1>{value.name}</h1>
      <h1>{value.email}</h1>
    </div>
  );
};

export default View;
