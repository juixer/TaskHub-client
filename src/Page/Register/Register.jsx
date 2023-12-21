import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import regAni from "../../assets/regAni.json";

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-155px)]">
      <h1 className="text-5xl font-bold text-center">Log In</h1>
      <div className="flex mt-10 justify-center items-center gap-5 rounded-2xl box flex-col md:flex-row-reverse mb-10">
        <div className="w-[70%]">
          <Lottie animationData={regAni} loop={true} />
        </div>
        <div className="w-full space-y-2">
          <form className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Name</h3>
              <input
                type="text"
                placeholder="Type here name here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Email</h3>
              <input
                type="email"
                placeholder="Type here email here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Profile Picture</h3>
              <input
                type="file"
                className="file-input file-input-bordered file-input-info w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Password</h3>
              <input
                type="password"
                placeholder="Type here password here"
                className="input input-bordered w-full"
              />
            </div>
            <button className="w-full btn glass bg-cyan-600 hover:bg-cyan-800 text-white font-bold text-lg">
              Register
            </button>
          </form>
          <div>
            <h1 className="text-center text-2xl font-bold">Or</h1>
            <h1 className="text-center text-2xl font-bold">Register With</h1>
            <SocialLogin />
          </div>
          <p className="mt-2 text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="font-bold text-blue-500">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
