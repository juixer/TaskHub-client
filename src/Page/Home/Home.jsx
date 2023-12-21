import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container/Container";

const Home = () => {
  return (
    <Container>
      <div className="mt-16">
        <Banner />
        <div className="flex justify-center items-center gap-5 flex-col mt-5">
          <h1 className="text-5xl font-bold text-center">How is it works</h1>
          <ul className="steps">
            <li data-content="★" className="step step-info">Register</li>
            <li data-content="★" className="step step-info">Go to Dashboard</li>
            <li data-content="★" className="step step-info">Add your Task</li>
            <li data-content="★" className="step step-info">Manage your Task</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home;
