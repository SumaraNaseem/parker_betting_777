import React, { useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ChangePassword() {
  // State for toggling password visibility
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .required('Old Password is required')
      .min(6, 'Password must be at least 6 characters'),
    newPassword: Yup.string()
      .required('New Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Please confirm your new password')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  // Initial form values
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // You can add your API call here to change the password
    console.log('Password Change Values:', values);
    setSubmitting(false);
  };

  return (
    <div className="w-[100%] justify-between mb-[53px] px-1">
      <div className="flex space-x-1 items-center px-2 bg-custom-yellow-background py-1 w-full">
        <IoMdPerson />
        <p>Change Password</p>
      </div>
      <div className='bg-white py-7 px-2'>
        <div className='w-[350px] px-3'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Old Password Field */}
                <div className="flex flex-col relative">
                  <label htmlFor="oldPassword" className=" text-[15px] font-[400] font-poppins mb-2 text-[#6F757A]">
                    Old Password
                  </label>
                  <Field
                    type={showOldPassword ? "text" : "password"}  // Toggle input type
                    name="oldPassword"
                    id="oldPassword"
                    className="p-2 border rounded w-full"
                  />
                  <span
                    onClick={() => setShowOldPassword(!showOldPassword)}  // Toggle visibility
                    className="absolute inset-y-0 top-7 right-2 flex items-center cursor-pointer"
                  >
                    {showOldPassword ? <FaEye className="text-gray-600" /> : < FaEyeSlash className="text-gray-600" />}
                  </span>
                  <ErrorMessage
                    name="oldPassword"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* New Password Field */}
                <div className="flex flex-col relative">
                  <label htmlFor="newPassword" className="text-[15px] font-[400] font-poppins mb-2 text-[#6F757A]">
                    New Password
                  </label>
                  <Field
                    type={showNewPassword ? "text" : "password"}  // Toggle input type
                    name="newPassword"
                    id="newPassword"
                    className="p-2 border rounded w-full"
                  />
                  <span
                    onClick={() => setShowNewPassword(!showNewPassword)}  // Toggle visibility
                    className="absolute inset-y-0 right-2 top-7  flex items-center cursor-pointer"
                  >
                    {showNewPassword ? <FaEye className="text-gray-600" /> : < FaEyeSlash className="text-gray-600" />}
                  </span>
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col relative">
                  <label htmlFor="confirmPassword" className="text-[15px] font-[400] font-poppins mb-2 text-[#6F757A]">
                    Confirm New Password
                  </label>
                  <Field
                    type={showConfirmPassword ? "text" : "password"}  // Toggle input type
                    name="confirmPassword"
                    id="confirmPassword"
                    className="p-2 border rounded w-full"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}  // Toggle visibility
                    className="absolute inset-y-0 right-2 top-7 flex items-center cursor-pointer"
                  >
                    {showConfirmPassword ? <FaEye className="text-gray-600" /> : < FaEyeSlash className="text-gray-600" />}
                  </span>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full p-2 bg-custom-yellow-background text-black rounded mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Changing Password...' : 'Change Password'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
