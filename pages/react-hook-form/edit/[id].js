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
    <div>
      <p className={styles.title}>Edit User</p>

      <form className={styles.App} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="first-name"
          type="text"
          {...register("firstName")}
          required
        />
        <input
          placeholder="last-name"
          type="text"
          {...register("lastName")}
          required
        />
        {errors.email}
        <input placeholder="role" type="text" {...register("role")} />
        <input
          value="submit"
          type={"submit"}
          style={{ backgroundColor: "#a1eafb" }}
        />
      </form>
    </div>
  );
}

export default App;
