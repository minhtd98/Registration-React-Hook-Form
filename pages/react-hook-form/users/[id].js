import React, { useEffect, useState, useMemo } from "react";
import UserForm from '../edit'
import { useRouter } from "next/router";
import { API_URL } from '../../../utils/constants'

const User = () => {
  const [user, setUser] = useState(null)
  const [editUser, setEditUser] = useState(false)

  const router = useRouter();
  const { id } = router.query; // Lấy id từ URL hiện tại

  useEffect(() => {
    if(id) {
      fetch(
        `${API_URL}/${id}`,
        {
          method: "GET",
        }
      ).then((res) => res.json()
      ).then((data) => 
        setUser(data)
      );
    }
  }, [id])

  if(user) {
    return (
      <>
      <div>
        <div>
          <span>{`First Name: ${user.firstName} `}</span>
        </div>
        <div>
          <span>{`Last Name: ${user.lastName} `}</span>
        </div>
        <div>
          <span>{`Role: ${user.role} `}</span>
        </div>
        <button style={{height: '30px', width: '50px'}} onClick={() => setEditUser(true)}>Edit</button>
      </div>
      {editUser && <UserForm user={user}/>}
      </>
    )
  }
  return null
}

export default User
