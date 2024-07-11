import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid Email Format"),
  subject: Yup.string().required("This field is required"),
  message: Yup.string(),
});

function ContactForm() {
  const sendToDatabase = (values) => {
    const postData = async () => {
      try {
        await fetch("https://nextron-electronics-store.onrender.com/api/contactUs", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      } catch (err) {
        console.error('Error posting data to database on client side:', err);
      }
    }
    postData();
  }

  const onSubmit = (values) => {
    sendToDatabase(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-group">
          <Field name="name">
            {({ field, meta }) => (
              <>
                <input
                  className="input"
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...field}
                />
                {meta.touched && meta.error ? (
                  <div className="error">{meta.error}</div>
                ) : null}
              </>
            )}
          </Field>
        </div>
        <div className="form-group">
          <Field name="email">
            {({ field, meta }) => (
              <>
                <input
                  className="input"
                  type="text"
                  id="email"
                  placeholder="Email Address"
                  {...field}
                />
                {meta.touched && meta.error ? (
                  <div className="error">{meta.error}</div>
                ) : null}
              </>
            )}
          </Field>
        </div>
        <div className="form-group">
          <Field name="subject">
            {({ field, meta }) => (
              <>
                <input
                  className="input"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  {...field}
                />
                {meta.touched && meta.error ? (
                  <div className="error">{meta.error}</div>
                ) : null}
              </>
            )}
          </Field>
        </div>
        <div className="form-group">
          <Field name="message">
            {({ field, meta }) => (
              <>
                <textarea
                  className="textarea"
                  id="message"
                  placeholder="Message (Optional)"
                  {...field}
                />
                {meta.touched && meta.error ? (
                  <div className="error">{meta.error}</div>
                ) : null}
              </>
            )}
          </Field>
        </div>
        <button className="button" type="submit">
          Send Message
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
