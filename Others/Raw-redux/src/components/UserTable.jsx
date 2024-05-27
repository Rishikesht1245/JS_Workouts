import React from "react";

const UserTable = ({ users }) => {
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
          <tr>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
                <div className="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
