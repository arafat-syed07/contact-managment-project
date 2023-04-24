import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>phone.Number</th>
              <th>Email</th>
              <th>Instagram</th>
              <th>FaceBook</th>
              <th>Twitter</th>
              <th>Facebook</th>
              <th>Gender</th>
              <th>Aadhaar</th>
              <th>Occupation</th>
              <th>uid</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.email} </td>
                <td>{user.insta}</td>
                <td>{user.twitter}</td>
                <td>{user.fb}</td>
                <td>{user.gender}</td>
                <td>{user.aadhaar}</td>
                <td>{user.occupation}</td>
                <td>{user.uid}</td>

                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
