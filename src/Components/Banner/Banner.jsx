import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero rounded-xl h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VVJqK2W/ezgif-com-optimize-1.gif)",
      }}
    >
      <div className="hero-overlay  rounded-xl bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg mx-auto">
          <h1 className="mb-5 text-5xl font-bold leading-snug">
            Simplify Your Day with My TodoHub
          </h1>
          <p className="mb-5 text-xl font-semibold">
            Simplify Your Day: Manage Tasks with Ease and Collaborate in Real
            Time
          </p>
          <Link to={'/dashboard'}><button className="btn glass bg-cyan-600 font-bold hover:bg-cyan-700 text-white">Let’s Explore</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
