import React, { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "../style.module.css";
import { API_URL } from '../../../utils/constants'

function UserForm({user}) {
  const router = useRouter()

  const defaultValues = useMemo(() => ({
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    role: user ? user.role : ''
  }), [user])

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues: state },
  } = useForm({
    defaultValues: defaultValues
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${API_URL}/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        router.push('/react-hook-form/users')
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{width: '400px', margin: '0 auto', fontSize: '16px'}}>
      <h1 style={{textAlign: 'center'}}>Edit User</h1>

      <form style={{display: 'flex', flexDirection: 'column', gap: '8px'}} onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
          <label className={ styles.label }>First Name</label>
          <input
            style={{height: '36px', borderRadius: '6px', border: '1px solid gray', padding: '0px 6px'}}
            placeholder="Michael"
            type="text"
            {...register("firstName")}
            required
          />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
          <label className={styles.label}>Last Name</label>
          <input
            style={{height: '36px', borderRadius: '6px', border: '1px solid gray', padding: '0px 6px'}}
            placeholder="Jackson"
            type="text"
            {...register("lastName")}
            required
          />
        </div>
        {errors.email}
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
          <label className={styles.label}>Role</label>
          <input
            style={{height: '36px', borderRadius: '6px', border: '1px solid gray', padding: '0px 6px'}}
            placeholder="Admin..."
            type="text"
            {...register("role")} />
        </div>
        <input
          type="submit"
          style={{ backgroundColor: "#940f8f", borderRadius: '6px', height: '36px', border: 'none', color: 'white', fontSize: '16px'}}
        />
      </form>
    </div>
  );
}

export default UserForm;
