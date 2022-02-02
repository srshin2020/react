import React, { useRef } from "react";
import { useForm } from "react-hook-form";


import "./App.css";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(watch('password')); // watch input value by passing the name of it
  const password = useRef();
  password.current = watch('password');
  const onSubmit = data => console.log(data); //send data to server if data is valid

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>email</label>
      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}
      <input name='email' type='email' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>This field is required</p>}

      <label>name</label>
      <input name="name" defaultValue="" {...register("name", { required: true, maxLength: 10 })} />
      {errors.name && errors.name.type === 'required' && <p>This field is required</p>}
      {errors.name && errors.name.type === 'maxLength' && <p>Input length should be under 10 </p>}

      <label>password</label>
      <input name="password" type='password' {...register("password", { required: true, minLength: 6 })} />
      {errors.password && errors.password.type === 'required' && <p>This field is required</p>}
      {errors.password && errors.password.type === 'minLength' && <p> password should be longer than 6</p>}

      <label>password confirm</label>
      <input name="passwordConfirm" type='password' {...register("passwordConfirm",
        { required: true, validate: (v) => v === password.current })} />        
      {errors.passwordConfirm && errors.passwordConfirm.type === 'required' && <p>This field is required</p>}
      {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && <p>password should be the same </p>}

      <input type="submit" />
    </form>
  );

}