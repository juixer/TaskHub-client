import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import regAni from "../../assets/regAni.json";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import useAuth from "../../Components/hooks/useAuth/useAuth";

const Register = () => {
  const [clicked, setClicked] = useState(false);
  const { createUser, updateUser } = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(data);
    setClicked(true)
    const imgFile = { image: data.image[0] };
    const imgRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBBAPI}`,
      imgFile,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (imgRes.data.success) {
      const photo = imgRes.data.data.url;
      createUser(email, password)
        .then(() => {
          updateUser(name, photo)
            .then(() => {
              navigate("/");
              setClicked(false)
              location.reload();
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          navigate("/");
          setClicked(false)
          location.reload();
          console.log(err.message);
        });
    } else {
      setClicked(false);
    }
  };
  return (
    <div className="min-h-[calc(100vh-155px)]">
      <h1 className="text-5xl font-bold text-center">Register</h1>
      <div className="flex mt-10 justify-center items-center gap-5 rounded-2xl box flex-col md:flex-row-reverse mb-10">
        <div className="w-[70%]">
          <Lottie animationData={regAni} loop={true} />
        </div>
        <div className="w-full space-y-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                Name<span className="text-red-500">*</span>
              </h3>
              <input
                type="text"
                {...register("name")}
                required
                placeholder="Type here name here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                Email<span className="text-red-500">*</span>
              </h3>
              <input
                type="email"
                {...register("email")}
                required
                placeholder="Type here email here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                Profile Picture<span className="text-red-500">*</span>
              </h3>
              <input
                type="file"
                required
                {...register("image")}
                className="file-input file-input-bordered file-input-info w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                Password<span className="text-red-500">*</span>
              </h3>
              <input
                type="password"
                required
                {...register("password", {
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/,
                    message: "Password must meet the specified criteria",
                  },
                })}
                placeholder="Type here password here"
                className="input input-bordered w-full"
              />
              <span className="text-gray-500 text-sm">
                Please provide atleast 8 characters, 1 uppercase letter, 1
                special character, and 1 number.
              </span>
              <br />
              {errors.password && (
                <span className="text-red-500 font-semibold">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              disabled={clicked}
              className="w-full btn glass bg-cyan-600 hover:bg-cyan-800 text-white font-bold text-lg"
            >
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
