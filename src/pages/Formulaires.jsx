import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Formulaires() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchShowAge = watch("showAge", false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(watch("name"));

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col justify-center border-gray-500"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 2,
                message: "Minimum 2 letters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="name" />
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            {...register("email", { required: "this is required" })}
          />
        </div>
        <div>
          <div>
            <label htmlFor="age"></label>
            <input
              id="age"
              type="number"
              {...register("showAge", { min: 18 })}
            />
            <ErrorMessage
              errors={errors}
              name="showAge"
              render={({ message }) => <p>{"Reviens quand tu seras grand"}</p>}
            />
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            {...register("password", { required: "This is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{"We need this to subscribe"}</p>}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
