// components/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ children, imageSide = "left" }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image Side */}
      {imageSide === "left" && (
        <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-100">
          <img src="login_image.jpg" alt="Illustration" className="max-w-full" />
        </div>
      )}

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 bg-white">
        <div className="max-w-md w-full">{children}</div>
      </div>

      {/* Image Right (for Signup) */}
      {imageSide === "right" && (
        <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-100">
          <img src="signup_image.jpg" alt="Illustration" className="max-w-full" />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
