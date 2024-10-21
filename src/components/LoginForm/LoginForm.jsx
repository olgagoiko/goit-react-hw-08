import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required!"),
  password: Yup.string()
    .min(6, "The password must contain at least 6 characters")
    .matches(/[A-Z]/, "The password must contain at least one capital letter.")
    .matches(/[a-z]/, "The password must contain at least one lowercase letter")
    .matches(/[0-9]/, "The password must contain at least one number")
    .required("Required!"),
});

export default function LoginForm () {
  const dispatch = useDispatch();
  const userEmail = useId();
  const userPassword = useId();

    const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.container}>
        <div className={css.wrap}>
          <label htmlFor={userEmail}>Email</label>
          <Field
            type="email"
            name="email"
            id={userEmail}
            className={css.input}
          />
          <ErrorMessage
            className={css.error}
            name="email"
            component="span"
          />
        </div>
        <div className={css.wrap}>
          <label htmlFor={userPassword}>Password</label>
          <Field
            type="password"
            name="password"
            id={userPassword}
            className={css.input}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};