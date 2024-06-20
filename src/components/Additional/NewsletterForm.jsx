import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    email: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .required("This field is required")

});

const onSubmit = (values) => {
    console.log(values);
};

function NewsletterForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="text-slate-200 font-medium text-xl mb-2">Subscribe to our newsletter</div>
                <div className="">
                    <Field name="email">
                        {(props) => {
                            const { field, form, meta } = props;
                            return (
                                <>
                                    <input
                                        className="px-3 py-1 mb-2 rounded-lg outline-none text-black"
                                        type="text"
                                        id="email"
                                        placeholder="Email Address"
                                        {...field}
                                    />
                                </>
                            );
                        }}
                    </Field>
                </div>
                <div className="">
                    <button className="searchQueryButton transition-all hover:ease-in rounded-md px-4 py-[0.125rem]" type="submit">
                        Subscribe
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default NewsletterForm
