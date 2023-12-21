import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";
const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
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
    <div className="mt-2">
      <button
        onClick={handleGoogleLogin}
        className="flex justify-center items-center gap-3 text-xl btn w-full md:w-[50%] mx-auto bg-gradient-to-r from-yellow-300 from-10% via-green-300 via-30% to-blue-300 to-90%"
      >
        {" "}
        <FaGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
