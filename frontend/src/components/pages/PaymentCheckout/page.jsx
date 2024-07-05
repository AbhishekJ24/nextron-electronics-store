import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Name must be between 3 and 25 characters')
    .max(24, 'Name must be between 3 and 25 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  address: Yup.string()
    .required('Required'),
});

const handleSubmit = (values, total_amt) => {
  const key = "rzp_test_6pYFNax08SnZLm";
  const secret = "5W8RWgQk0qcTRUFmfSc3Wbd9";
  const amount = Math.round(parseFloat(total_amt) * 100)

  const options = {
    key: key,
    key_secret: secret,
    amount: amount,
    currency: "INR",
    name: "Nextron Electronics",
    description: "Razorpay mockup payment gateway for nextron electronics - an ecommerce project by Abhishek Joshi",
    handler: function (response) {
      const paymentId = response.razorpay_payment_id;
      console.log("Payment Id", paymentId, values);
    },
    theme: {
      color: "#001b37"
    },
  };

  const pay = new window.Razorpay(options);
  pay.open();
};

const page = () => {
  const total_amt = useSelector((state) => state.products.totalAmount);

  return (
    <div className="max-w-md mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold mb-5">Checkout</h2>
      <Formik
        initialValues={{ name: '', email: '', address: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values, total_amt)}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                className={`mt-1 block w-full px-3 py-2 border ${touched.name && errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className={`mt-1 block w-full px-3 py-2 border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <Field
                id="address"
                name="address"
                type="text"
                className={`mt-1 block w-full px-3 py-2 border ${touched.address && errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="block rounded-lg my-10 mx-auto w-4/5 p-4 bg-blue-100 hover:bg-blue-200 hover:ease-out transition-all"
            >
              <img className="h-8 m-auto" src="/razorpay.png" alt="Razorpay" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default page;
