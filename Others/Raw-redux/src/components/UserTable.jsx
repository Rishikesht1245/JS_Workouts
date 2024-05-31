import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/user.action";

const UserTable = ({ users }) => {
  const [deleting, setDeleting] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Deleting")
    setDeleting(id);
    dispatch(deleteUser(id))
    setDeleting(null);
  };

  const handleUpdate = (id) => {};
  return (
    <table className="table" border={1}>
      <thead>
        <tr className="t-row">
          <th className="t-data">Name </th>
          <th className="t-data">Email </th>
          <th className="t-data">Actions </th>
        </tr>
      </thead>

      <tbody>
        {users?.map((user) => (
          <tr key={user?.id}>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
              <div className="actions">
                <button onClick={() => handleUpdate(user?.id)}>Edit</button>
                <button onClick={() => handleDelete(user?.id)}>
                  {deleting === user?.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
