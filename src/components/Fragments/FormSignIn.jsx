import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import Checkbox from "../Elements/Checkbox"
import LabeledInput from "../Elements/LabeledInput"
import { useForm } from "react-hook-form"

const FormSignIn = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="mb-6">
        <LabeledInput
          label="email"
          type="email"
          placeholder="Hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }),
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="password"
          type="password"
          placeholder="********"
          name="password"
          register={{
            ...register("password", {
              required: "Password is required",
            }),
          }}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div className="mb-3">
        <Checkbox />
        <label htmlFor="status" className="text-sm text-gray-01 ms-6">
          Keep me signed in
        </label>
      </div>
      <Button 
        variant={
          !isValid 
          ? "bg-gray-05 w-full text-white" 
          : "bg-primary w-full text-white"
        }
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
    </form>
  )
}

export default FormSignIn