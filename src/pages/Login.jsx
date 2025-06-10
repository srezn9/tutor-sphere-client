import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const getFriendlyErrorMessage = (error) => {
    if (!error?.code) return "Something went wrong. Please try again.";

    switch (error.code) {
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-email":
        return "Invalid email format.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/popup-closed-by-user":
        return "Google login was cancelled.";
      case "auth/network-request-failed":
        return "Network error. Check your internet connection.";
      default:
        return "Login failed. Please check your credentials.";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome Back!",
          text: "You have successfully logged in.",
          icon: "success",
          iconColor: "#10b981",
          background: "#f0fdf4",
          color: "#065f46",
          confirmButtonText: "Let's Go!",
          confirmButtonColor: "#10b981",
          customClass: {
            popup: "rounded-xl shadow-lg",
            confirmButton: "px-4 py-2 text-white font-semibold",
          },
          timer: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: getFriendlyErrorMessage(error),
          icon: "error",
          iconColor: "#ef4444",
          background: "#fef2f2",
          color: "#7f1d1d",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#ef4444",
          customClass: {
            popup: "rounded-xl shadow-lg",
            confirmButton: "px-4 py-2 text-white font-semibold",
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Logged in with Google!",
          text: "Welcome to the app.",
          icon: "success",
          iconColor: "#0ea5e9",
          background: "#f0f9ff",
          color: "#0369a1",
          confirmButtonText: "Continue",
          confirmButtonColor: "#0ea5e9",
          customClass: {
            popup: "rounded-xl shadow-lg",
            confirmButton: "px-4 py-2 text-white font-semibold",
          },
          timer: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Login Failed",
          text: getFriendlyErrorMessage(error),
          icon: "error",
          iconColor: "#ef4444",
          background: "#fef2f2",
          color: "#7f1d1d",
          confirmButtonText: "Retry",
          confirmButtonColor: "#ef4444",
          customClass: {
            popup: "rounded-xl shadow-lg",
            confirmButton: "px-4 py-2 text-white font-semibold",
          },
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-12">
      <h2 className="text-center p-5 text-3xl font-bold text-violet-950">
        Login Now
      </h2>

      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-violet-950">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Email"
            required
          />

          <label className="label text-violet-950">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            placeholder="Password"
            required
          />

          <div>
            <button type="button" className="link link-hover text-violet-700">
              Forgot password?
            </button>
          </div>

          <button
            className="btn bg-violet-600 hover:bg-violet-700 text-white mt-4"
            type="submit"
          >
            Login
          </button>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn border mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="pt-5 text-center text-violet-950">
            Don't have an account?{" "}
            <Link to="/register" className="text-violet-600 underline">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
