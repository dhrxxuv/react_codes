import { useState } from "react";
import { bg_Img } from "../utlis/backgeoundImg";
import Header from "./Header";

const Login = () => {
  const [clickedonSignup, setSignup] = useState(false);

  const handleFormToggle = () => {
    setSignup((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
    
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={bg_Img}
          alt="Bg_image"
        />
      </div>
 
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-12 w-1/4 min-h-[400px] flex flex-col justify-center rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted!");
        }}
      >
        <h1 className="font-bold text-3xl px-4">
          {clickedonSignup ? "Sign Up" : "Sign In"}
        </h1>
        
        {/* Common Email Field */}
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
        />

        {/* Conditional Password Field */}
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
        />

        {clickedonSignup && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
            />
          </>
        )}

        <button className="w-full p-3 mt-4 bg-red-600 text-white font-bold rounded hover:bg-red-700">
          {clickedonSignup ? "Sign Up" : "Sign In"}
        </button>
        
        <p
          className="py-4 cursor-pointer"
          onClick={handleFormToggle}
        >
          {clickedonSignup ? "Already have an account? Sign In" : "New To Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
