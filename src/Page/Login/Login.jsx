import Lottie from "lottie-react";
import loginAni from "../../assets/loginAni.json";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/hooks/useAuth/useAuth";
import Swal from "sweetalert2";
const Login = () => {
  const { register, handleSubmit } = useForm();

  const { signInUser } = useAuth();

    const navigate = useNavigate()
    const location = useLocation()

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="min-h-[calc(100vh-155px)]">
      <h1 className="text-5xl font-bold text-center">Log In</h1>
      <div className="flex mt-10 justify-center items-center gap-5 rounded-2xl box flex-col md:flex-row mb-10">
        <div className="w-[70%]">
          <Lottie animationData={loginAni} loop={true} />
        </div>
        <div className="w-full space-y-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Email</h3>
              <input
                type="email"
                {...register("email")}
                placeholder="Type here email here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Password</h3>
              <input
                type="password"
                {...register("password")}
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
          <p className="mt-2 text-center">
            Do not have an account?{" "}
            <Link to={"/register"}>
              <span className="font-bold text-blue-500">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
