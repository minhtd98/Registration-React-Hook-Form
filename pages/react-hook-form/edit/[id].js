import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "../style.module.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { id } = router.query; // Lấy id từ URL hiện tại

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://64f5867d2b07270f705d538f.mockapi.io/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Successfully updated!");
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error(error);
    }
    router.push('/react-hook-form/users')
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

export default App;
