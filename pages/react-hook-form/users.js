import React, { useEffect, useState } from "react";
import Link from "next/link";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://64f5867d2b07270f705d538f.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {" "}
      <h1 style={{ fontSize: "24px", color: "#333", marginBottom: "16px" }}>
        List Users
      </h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>
              First Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>
              Last Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {user.firstName}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {user.lastName}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {user.role}
              </td>
              <td>
                <Link href={`/react-hook-form/edit/${user.id}`}>
                  <button
                    style={{
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/react-hook-form/register">
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
          }}
        >
          Register
        </button>
      </Link>
    </div>
  );
}

export default UserList;
