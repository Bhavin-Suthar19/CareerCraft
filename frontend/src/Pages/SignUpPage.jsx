import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import AnimatedPage from "../components/AnimatedPage";

const SignUpPage = () => {
  const [error, setError] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirm = e.target.confirm.value.trim();

    if (!name || !email || !password || !confirm) {
      setError("Please fill all fields.");
    } else if (password !== confirm) {
      setError("Password and Confirm Password must match.");
    } else {
      setError(false);
      // Logic to register...
    }
  };

  return (
    <AnimatedPage>
      <AuthLayout imageSide="right">
        <h2 className="text-2xl font-bold text-center mb-6 mt-10">Create Your Account</h2>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" name="name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" name="password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input type="password" name="confirm" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <button type="submit" className="w-full bg-[#ff8c74] text-white py-2 rounded hover:bg-[#da573c] transition">
            Sign Up
          </button>
          <div className="text-center text-gray-500 mt-4">or sign up with</div>
          <div className="flex justify-center gap-4 mt-2">
            <button className="border px-4 py-2 rounded flex items-center gap-2">
              <img src="ggl_logo.png" className="w-5 h-5" alt="Google" /> Google
            </button>
            <button className="border px-4 py-2 rounded flex items-center gap-2">
              <img src="Fb_logo.png" className="w-5 h-5" alt="Facebook" /> Facebook
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </AuthLayout>
    </AnimatedPage>
  );
};

export default SignUpPage;
