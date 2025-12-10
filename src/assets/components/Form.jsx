import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

function Form() {
  const [success, setSuccess] = useState();
  const schemaContact = z.object({
    fullname: z.string().min(3, "Minimum 3").max(20, "Maximum 20"),
    email: z
      .string()
      .email("Enter valid email address")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
    password: z
      .string()
      .min(6, "Minimum 8 characters")
      .max(20, "Maximum 20 characters")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character")
      .regex(/[A-Z]/, "At least one uppercase letter"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaContact),
  });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess("Form submitted successfully!");
    reset();

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          name="fullname"
          {...register("fullname")}
        />
        {errors.fullname && (
          <span className="text-danger">{errors.fullname.message}</span>
        )}
        <br />

        <label>Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
        <br />

        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
        <br />

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
        {success && <p className="text-success mt-3">{success}</p>}
      </form>
    </>
  );
}

export default Form;
