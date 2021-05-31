import { useForm } from "react-hook-form";

import "./styles.scss";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const newEmail = "/user-request";
    await fetch(
      (newEmail),
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({
          sender: data.sender,
          email: data.email,
          message: data.message,
          subject: data.subject,
        }),
      },
      reset()
    );
  };
  console.log(errors);

  return (
    <form
      className="ContactForm"
      id="user-request"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      {errors.sender && errors.sender.type === "required" && (
        <span role="alert">This field is required</span>
      )}{" "}
      <input
        id="sender"
        type="text"
        className="ContactForm__input"
        placeholder="Full Name"
        aria-invalid={errors.sender ? "true" : "false"}
        {...register("sender", { required: true, maxLength: 30 })}
      />
      {errors.sender && errors.sender.type === "required" && (
        <span role="alert">This field is required</span>
      )}
      <input
        id="email"
        type="email"
        className="ContactForm__input"
        placeholder="Email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", { required: true, maxLength: 30 })}
      />
      {errors.email && errors.email.type === "required" && (
        <span role="alert">This field is required</span>
      )}
      <textarea
        id="message"
        type="text"
        className="ContactForm__input--textarea"
        placeholder="Message"
        aria-invalid={errors.message ? "true" : "false"}
        {...register("message", { required: true, maxLength: 500 })}
      />
      {errors.message && errors.message.type === "required" && (
        <span role="alert">This field is required</span>
      )}
      <select
        className="ContactForm__input"
        {...register("subject", { required: true })}
      >
        <option value="Front-End">Front-End</option>
        <option value="Photography">Photography</option>
        <option value="Other">Other</option>
      </select>
      <div className="ContactForm__input--submitbox">
        <input
          type="submit"
          onClick={() => {}}
          className="ContactForm__input--send"
          lang="en"
        />
        <input
          type="reset"
          onClick={() => reset()}
          className="ContactForm__input--reset"
          lang="en"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
