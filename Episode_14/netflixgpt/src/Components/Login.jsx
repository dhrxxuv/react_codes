/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { bg_Img } from "../utlis/backgeoundImg";
import Header from "./Header";
import checkValidation from "../utlis/checkValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { adduser } from "./Redux/userSlice";
const Login = () => {
  const dispatch = useDispatch()
  const [clickedOnSignup, setSignup] = useState(false);
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const formRef = useRef();
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPass = useRef();
  const Mob = useRef();

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleValidation = async () => {
    setFirebaseError("");
    const userInput = {
      name: clickedOnSignup ? name.current.value : undefined,
      email: email.current.value,
      password: password.current.value,
      mobile: clickedOnSignup ? Mob.current.value : undefined,
    };
    const validationErrors = checkValidation(userInput);
    if (clickedOnSignup && password.current.value !== confirmPass.current.value) {
      validationErrors.confirmPass = "Passwords do not match";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (clickedOnSignup) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );
          await updateProfile(userCredential.user, {
            displayName: name.current.value
          });
          const { uid, email: userEmail, displayName } = auth.currentUser;
          dispatch(adduser({ uid, email: userEmail, displayName }));
          resetForm();
          //navigate("/browse");
        } catch (error) {
          setFirebaseError(error.message);
        }
      } else {
        try {
          const userDetail = await signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );
          resetForm();
          //navigate("/browse");
        } catch (error) {
          setFirebaseError(error.message);
        }
      }
    }
  };

  const handleFormToggle = () => {
    setSignup(prev => !prev);
    setErrors({});
    setFirebaseError("");
    resetForm();
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={bg_Img} alt="Bg_image" />
      </div>
      <form
        ref={formRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-12 w-1/4 min-h-[400px] flex flex-col justify-center rounded-lg shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl px-4">
          {clickedOnSignup ? "Sign Up" : "Sign In"}
        </h1>
        {clickedOnSignup && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        {clickedOnSignup && (
          <>
            <input
              ref={confirmPass}
              type="password"
              placeholder="Confirm Password"
              className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
            />
            {errors.confirmPass && <p className="text-red-500 text-sm">{errors.confirmPass}</p>}
            <input
              ref={Mob}
              type="text"
              placeholder="Mobile Number"
              className="block w-full p-3 my-3 bg-gray-800 border border-gray-600 rounded"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </>
        )}
        {firebaseError && <p className="text-red-500 text-sm text-center">{firebaseError}</p>}
        <button
          className="w-full p-3 mt-4 bg-red-600 text-white font-bold rounded hover:bg-red-700"
          onClick={handleValidation}
        >
          {clickedOnSignup ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleFormToggle}>
          {clickedOnSignup ? "Already have an account? Sign In" : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
