import Lottie from "lottie-react";
import loginAni from "../../assets/loginAni.json";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {
  return (
    <div className="min-h-[calc(100vh-155px)]">
      <h1 className="text-5xl font-bold text-center">Log In</h1>
      <div className="flex mt-10 justify-center items-center gap-5 rounded-2xl box flex-col md:flex-row mb-10">
        <div className="w-[70%]">
          <Lottie animationData={loginAni} loop={true} />
        </div>
        <div className="w-full space-y-2">
          <form className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Email</h3>
              <input
                type="email"
                placeholder="Type here email here"
                className="input input-bordered w-full"
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
              Log In
            </button>
          </form>
          <div>
            <h1 className="text-center text-2xl font-bold">Or</h1>
            <h1 className="text-center text-2xl font-bold">Login With</h1>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
