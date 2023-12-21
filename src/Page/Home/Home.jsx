import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container/Container";

const Home = () => {
  return (
    <Container>
      <div className="mt-16">
        <Banner />
        <div className="flex justify-center items-center gap-5 flex-col mt-5">
          <h1 className="text-5xl font-bold text-center">How is it works</h1>
          <ul className="steps steps-vertical md:steps-horizontal mb-5">
            <li data-content="★" className="step step-info font-semibold">Register</li>
            <li data-content="★" className="step step-info font-semibold">Go to Dashboard</li>
            <li data-content="★" className="step step-info font-semibold">Add your Task</li>
            <li data-content="★" className="step step-info font-semibold">Manage your Task</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home;
