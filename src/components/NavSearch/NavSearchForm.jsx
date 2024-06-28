import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  query: "",
};

const validationSchema = Yup.object({
  query: Yup.string(),
});

function NavSearchForm() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    
    navigate(`/products/${values['search-query']}`);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex gap-5">
          <Field name="search-query">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <>
                  <input
                    className="outline-none focus:outline-none px-5 py-2 w-[35rem] rounded-xl text-black"
                    type="text"
                    id="search-query"
                    placeholder="What can we help you find today?"
                    {...field}
                  />
                  {meta.touched && meta.error ? (
                    <div className="error"> {meta.error} </div>
                  ) : null}
                </>
              );
            }}
          </Field>
          <button
            className="searchQueryButton px-5 py-2 hover:ease-out transition-all rounded-xl"
            type="submit"
          >
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default NavSearchForm;
