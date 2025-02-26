
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h3>Powered by IEEE Computer Society</h3>
      </header>
      <main className="main-content">
        <h1>Welcome to</h1>
        <h2>ICCSAI 2025</h2>
        <p>
          The International Conference on AI, Security, and Communication
          (ICCSAI 2025) brings together leading researchers, industry experts,
          and academics to discuss groundbreaking advancements in artificial
          intelligence, cybersecurity, and modern communication technologies.
        </p>
        <div className="buttons">
          <button className="btn learn-more">Learn More</button>
          <button className="btn register-now">Register Now</button>
        </div>
        <section className="about-section">
          <h2>About ICCSAI 2025</h2>
          <p>
            ICCSAI 2025 is a premier global event dedicated to fostering
            innovation and collaboration in AI, security, and communication.
            Our mission is to bring together the brightest minds in the field
            to shape the future of technology.
          </p>
          <ul>
            <li>Cutting-edge keynote speeches</li>
            <li>Groundbreaking research presentations</li>
            <li>Interactive panel discussions</li>
            <li>Hands-on workshops led by industry experts</li>
          </ul>
        </section>
        <section className="conference-stats">
          <h2>ICCSAI Conference</h2>
          <p>5000+ Attendees</p>
          <p>from 50+ countries</p>
          <button className="btn explore">Explore Conference Details</button>
        </section>
      </main>
      <footer className="footer">
        <p>Galgotias University</p>
      </footer>
    </div>
  );
};

export default Home;