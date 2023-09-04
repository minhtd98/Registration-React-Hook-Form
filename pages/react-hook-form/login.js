import React from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        alert(userData.name + " You Are Successfully Logged In");
      } else {
        alert("Email or Password is not matching with our record");
      }
    } else {
      alert("email is not exist");
    }
  };
  return (
    <>
      <p className={styles.title}>Login Form</p>

      <form className={styles.App} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" type="email" {...register("email", { required: true })} />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input placeholder="password" type="password" {...register("password")} />
        <input value="Login" type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default Login;
