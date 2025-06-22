const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>👋 Welcome to the About Page</h1>
        <p>
          This project is a modern React application built to demonstrate routing, state management, and clean UI design.
        </p>
        <p>
          Created with ❤️ using React, Parcel, and the Swiggy public API for educational purposes.
        </p>
        <div className="about-team">
          <h2>👩‍💻 Meet the Developer</h2>
          <ul>
            <li><strong>Name:</strong> Akansha Singh</li>
            <li><strong>Role:</strong> Frontend Developer</li>
            <li><strong>Focus:</strong> UI/UX, React, Routing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
