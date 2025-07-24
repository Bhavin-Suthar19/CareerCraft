import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import AnimatedPage from "../components/AnimatedPage";

const LoginPage = () => {
  const [error, setError] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if (!email || !password) {
      setError("Please fill all fields.");
    } else {
      setError(false);
      // Logic to authenticate...

      const UserDetails = {
        email,
        password
      }

      try{
        const response = await fetch('http://localhost:5000/api/users/login', {
          method : 'POST',
          headers :{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(UserDetails),
        });
        
        const data = await response.json();
        alert(data.message);
      }catch(err){
        console.log(err);
        alert("Login Failed");
      }
    }
  };

  return (
    <AnimatedPage>
      <AuthLayout imageSide="left">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium">Email or Username</label>
            <input type="email" name="email" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#da573c]" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" name="password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#da573c]" />
            <div className="text-right text-sm text-blue-500 mt-1 cursor-pointer">Forgot Password?</div>
          </div>
          <button type="submit" className="w-full bg-[#ff8c74] text-white py-2 rounded hover:bg-[#da573c] transition">
            Login
          </button>
          <div className="text-center text-gray-500 mt-4">or continue with</div>
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </AuthLayout>
    </AnimatedPage>
  );
};

export default LoginPage;
