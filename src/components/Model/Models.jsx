import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import logo from '../../assest/logo.png';
import { RxCross2 } from "react-icons/rx";
import { IoMdEye, IoMdEyeOff } from "react-icons/io"; // Import IoMdEyeOff for toggling icon
import { BsAndroid2 } from "react-icons/bs";

function Modal({ showModal, handleClose, formType, setFormType }) {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  
  const navigate = useNavigate();
  if (!showModal) return null;

  const isLogin = formType === 'login';

  const initialValues = isLogin
    ? { email: '', password: '' }
    : { username: '', email: '', password: '', confirmPassword: '' };

  const validationSchema = Yup.object(
    isLogin
      ? {
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }
      : {
          username: Yup.string().required('Username is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        }
  );

  return (
    <div onClick={handleClose} className="fixed inset-0 w-auto bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-custom-blue-background -mt-20 ${isLogin
          ? "lg:w-[500px] lg:h-[450px] mt-6 lg:-mt-24 p-2"
          : "lg:w-[600px] lg:h-[580px] mt-10 lg:mt-4 p-2"} rounded-lg shadow-lg p-6 relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-2 font-ubuntu font-extrabold text-[20px] text-white"
          onClick={handleClose}
        >
          <RxCross2 />
        </button>
        <div className="text-center flex justify-center items-center">
          <img src={logo} className="w-[200px] h-[120px] -mt-2" alt="logo" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form data', values);
            localStorage.setItem("UserEmail",values.email)
            navigate('/');
            handleClose();
          }}
        >
          {({ handleSubmit }) => (
            <Form className="mt-4 flex flex-col space-y-2 overflow-x-scroll scrollbar-hide" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <label className="text-[14px] font-poppins text-white font-[700]">Username</label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="p-2 text-gray-800 rounded-md text-[16px] font-[400] font-poppins"
                  />
                  <ErrorMessage name="username" component="div" className="text-yellow-600 text-sm mt-1" />
                </>
              )}
              <label className="text-[14px] font-[700] font-poppins text-white">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 mb-2 text-gray-800 rounded-md text-[16px] font-[400] font-poppins"
              />
              <ErrorMessage name="email" component="div" className="text-yellow-600 text-sm mt-1" />

              <label className="text-[16px] font-[700] font-poppins text-white">Password</label>
              <div className="relative w-full">
                <Field
                  type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                  name="password"
                  className="p-2 pr-10 text-gray-800 rounded-md text-[16px] font-[400] font-poppins w-full"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-custom-yellow-background rounded-r-md"
                >
                  {showPassword ? <IoMdEyeOff className="h-5 w-5 text-white" /> : <IoMdEye className="h-5 w-5 text-white" />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-yellow-600 text-sm mt-1" />

              {!isLogin && (
                <>
                  <label className="text-[16px] font-[700] font-poppins text-white">Confirm Password</label>
                  <div className="relative w-full">
                    <Field
                      type={showConfirmPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                      name="confirmPassword"
                      className="p-2 pr-10 text-gray-800 rounded-md text-[16px] font-[400] font-poppins w-full"
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle confirm password visibility
                      className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-custom-yellow-background rounded-r-md"
                    >
                      {showConfirmPassword ? <IoMdEyeOff className="h-5 w-5 text-white" /> : <IoMdEye className="h-5 w-5 text-white" />}
                    </button>
                  </div>
                  <ErrorMessage name="confirmPassword" component="div" className="text-yellow-600 text-sm mt-1" />
                </>
              )}

              <div className='h-2 mt-3'></div>
              <button type="submit" className="bg-custom-yellow-background text-white p-2 rounded-md hover:opacity-50">
                {isLogin ? "Login" : "Register"}
              </button>

              <div className='flex justify-center space-x-2 items-center '>
                <BsAndroid2 className='text-customTextColor-android text-bold font-[400] text-[30px]' />
                <p className='text-white'>Download Apk</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Modal;
