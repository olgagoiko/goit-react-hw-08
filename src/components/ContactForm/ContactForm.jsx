import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux//contacts/operations";
import { useId } from "react";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name can not be longer than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number can not be longer than 50 characters')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Enter in the format 123-45-67')
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required('Number is required'),
});


export default function ContactForm() {
  const dispatch = useDispatch();
  const userNameId = useId();
  const userNumber = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };



  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.container}>
        <div className={css.wrap}>
          <label htmlFor={userNameId}>Name</label>
          <Field
            type="text"
            className={css.input}
            name="name"
            id={userNameId}
          />
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
        </div>

        <div className={css.wrap}>
          <label htmlFor={userNumber}>Number</label>
          <Field
            type="tel"
            className={css.input}
            name="number"
            id={userNumber}
          />
          <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          />
        </div>

        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
}