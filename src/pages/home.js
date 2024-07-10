import React, { useEffect, useState } from "react";
import http from "../http";
import { Link } from "react-router-dom";
import { useQuery,useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const [users, setUsers] = useState([]);
  const queryClient = useQueryClient();
  // useEffect(() => {
    // fetchAllUsers();
  // }, []);
  const { data, isLoading, error } = useQuery({queryKey: ['users'],queryFn: () =>
    http.get("/users").then(res =>  res)
   });
    // const fetchAllUsers = () => {
  //   http.get("/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // };

  const deleteUser = (User) => {
    http.delete("users/" + User).then((res) => {
      // fetchAllUsers();
      queryClient.invalidateQueries({ queryKey: ['users'] });
    });
  };
  if (isLoading) return <p>Loading .....</p>;
  if (error) return <p>Error..... {error.message}</p>;
  return (
    <div className="container">
      <h1>User Listing</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  className="btn btn-primary mx-1"
                  to={{ pathname: "/edit/" + user.id }}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-success mx-1"
                  to={{ pathname: "/view/" + user.id }}
                >
                  View
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
