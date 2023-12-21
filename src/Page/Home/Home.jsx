import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container/Container";

const Home = () => {
  return (
    <Container>
      <div className="mt-16">
        <Banner />
        <h1 className="text-5xl font-bold mb-6 text-center mt-5">
          Who Benefits from Our Platform?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Developers</h2>
              <p>Streamline project management and collaboration for development teams.</p>
            </div>
          </div>

          <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Corporate Professionals</h2>
              <p>Enhance task organization and team coordination in corporate environments.</p>
            </div>
          </div>

          <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Bankers</h2>
              <p>Efficiently manage financial tasks and projects with a user-friendly interface.</p>
            </div>
          </div>


          <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Freelancers</h2>
              <p>Manage and organize freelance projects efficiently with task prioritization and collaboration tools.</p>
            </div>
          </div>

          <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Students</h2>
              <p>Stay on top of academic tasks and group projects, ensuring deadlines are met and projects are well-coordinated.</p>
            </div>
          </div>

          <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Event Planners</h2>
              <p>Coordinate and plan events seamlessly by keeping track of tasks, timelines, and vendor communications in one place.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 flex-col mt-8">
          <h1 className="text-5xl font-bold text-center">How is it works</h1>
          <ul className="steps steps-vertical md:steps-horizontal mb-5">
            <li data-content="★" className="step step-info font-semibold">
              Register
            </li>
            <li data-content="★" className="step step-info font-semibold">
              Go to Dashboard
            </li>
            <li data-content="★" className="step step-info font-semibold">
              Add your Task
            </li>
            <li data-content="★" className="step step-info font-semibold">
              Manage your Task
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home;
