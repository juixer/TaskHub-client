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
          <h1 className="mb-5 text-5xl font-bold">
            Simplify Your Day with TodoHub
          </h1>
          <p className="mb-5 text-xl font-semibold">
            Simplify Your Day: Manage Tasks with Ease and Collaborate in Real
            Time
          </p>
          <button className="btn glass bg-lime-600 font-bold hover:bg-lime-700 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
