import { useForm } from "react-hook-form";
import useAuth from "../../../../Components/hooks/useAuth/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseHelmet from "../../../../Components/hooks/useHelmet/UseHelmet";

const EditProfile = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
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
      updateUser(data.name, photo)
        .then(() => {
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "profile updated",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          navigate("/");
          console.log(err.message);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "profile updated",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  return (
    <div>
        <UseHelmet title={'Edit Profile'}/>
      <h1 className="text-5xl font-bold text-center">Edit Profile</h1>
      <div className="flex mt-5 justify-center items-center gap-5 flex-col">
        <div className="flex w-full justify-center items-center flex-col gap-5">
          <img src={user.photoURL} className="w-44 mask mask-circle" />
          <h1 className="text-3xl font-bold">{user.displayName}</h1>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto space-y-5"
          >
            <div>
              <h4 className="font-bold">Name:</h4>
              <input
                type="text"
                defaultValue={user.displayName}
                {...register("name")}
                placeholder="Type name here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h4 className="font-bold">Profile Picture:</h4>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered file-input-info w-full"
              />
            </div>
            <button className="btn glass w-full bg-sky-500 hover:bg-sky-800 text-xl font-bold text-white">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
