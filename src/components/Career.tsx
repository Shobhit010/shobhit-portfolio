import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing & Upskilling</h4>
                <h5>Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Current i am a freelancer and upskilling my skills to better extent.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Netaji Subhash Engineering College</h4>
                <h5>B.TECH in ECE</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently I am pursuing Bachlor of Technology in Electronics & Communication Engineering from Netaji Subhash Engineering College.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>D.A.V. Public School</h4>
                <h5>STANDARD XII</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              I had done my 12<sup>th</sup> from D.A.V. Public School,Rajrappa Project,CCL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
