import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

async function getSearchQueryProduct() {
  const response = fetch(`https://dummyjson.com/products/search?q=${query}`);
}

const initialValues = {
  query: "",
};

const validationSchema = Yup.object({
  query: Yup.string(),
});

function NavSearchForm() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const q = values['search-query'].trim();
    if (q.length != 0)
      navigate(`/products/${q}`);
    else
      navigate('/products')
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="py-2">
          <Field name="search-query">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <>
                  <input
                    className="outline-none focus:outline-none px-5 mr-2 w-3/4 py-2 text-sm rounded-xl text-black"
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
            className="searchQueryButton px-1 py-2 w-1/5 text-sm hover:ease-out transition-all rounded-lg"
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
