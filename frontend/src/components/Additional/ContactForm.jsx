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
    
        const response = await fetch("https://nextron-electronics-store.onrender.com/api/contactUs", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values?.name,
            email: values?.email,
            subject: values?.subject,
            message: values?.message
          }),
        })
        console.log(await response.json())
      }
      catch (err) {
        console.error('Error posting data to database: ', err);
      }
    }
    postData();
  }

  const onSubmit = (values) => {
    console.log(values)
    sendToDatabase(values)
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <Field name="name" className="">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <>
                    <input
                      className="input"
                      type="text"
                      id="name"
                      placeholder="Name"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <div className="error"> {meta.error} </div>
                    ) : null}
                  </>
                );
              }}
            </Field>
          </div>
          <div className="form-group">
            <Field name="email">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <>
                    <input
                      className="input"
                      type="text"
                      id="email"
                      placeholder="Email Address"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <div className="error"> {meta.error} </div>
                    ) : null}
                  </>
                );
              }}
            </Field>
          </div>
          <div className="form-group">
            <Field name="subject">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <>
                    <input
                      className="input"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <div className="error"> {meta.error} </div>
                    ) : null}
                  </>
                );
              }}
            </Field>
          </div>
          <div className="form-group">
            <Field name="message">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <>
                    <textarea
                      className="textarea"
                      type="text"
                      id="message"
                      placeholder="Message (Optional)"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <div className="error"> {meta.error} </div>
                    ) : null}
                  </>
                );
              }}
            </Field>
            <button className="button" type="submit">
              Send Message
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
