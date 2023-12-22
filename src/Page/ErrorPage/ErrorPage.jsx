import Lottie from "lottie-react";
import errAni from "../../assets/errorAni.json";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center my-16 space-y-3">
      <Lottie animationData={errAni} loop={true} />
      <h1 className="font-semibold text-3xl">{err.statusText}</h1>
      <h1 className="font-semibold text-2xl">{err.error.message}</h1>
      <h1 className="font-semibold text-3xl">Oops! Something went wrong</h1>
      <div className="join">
        <button onClick={handleBack} className="btn join-item text-lg font-bold">
          Go Back
        </button>
        <button onClick={handleHome} className="btn join-item text-lg font-bold">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
