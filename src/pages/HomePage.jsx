import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Welcome to FarmAdvisor</h1>
        <p className="subtitle">
          Empowering Farmers with Smart Crop Recommendations
        </p>
      </header>

      <div className="content">
        <div className="image-container">
          <img src="/cropHome.jpeg" alt="Farm field" className="farm-image" />
        </div>
        <div className="description">
          <p>
            FarmAdvisor helps farmers make informed decisions with accurate crop
            recommendations and yield predictions tailored to their land.
            Maximize your productivity with advanced data-driven insights.
          </p>
          <div className="links">
            <a
              href="https://top3crops.onrender.com"
              className="link-button"
              target="_blank"
              // rel="noopener noreferrer"
            >
              Crop Recommendation
            </a>
            <a
              href="https://crop-yield-prediction-per-country.onrender.com/"
              className="link-button"
              target="_blank"
              // rel="noopener noreferrer"
            >
              Yield Prediction
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 FarmAdvisor. Cultivating Smarter Agriculture.</p>
      </footer>
    </div>
  );
};

export default HomePage;
