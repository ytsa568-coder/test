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
                <h4>3+ Years</h4>
                <h5>Experience</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              We have been in this field for the past 3+ years, mastering high-retention video editing and post-production.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>15+ Creators</h4>
                <h5>Partnerships</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              We have successfully worked with over 15 creators, delivering high-impact content that drives engagement and growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Dedicated Team</h4>
                <h5>On-Time Delivery</h5>
              </div>
              <h3>ALWAYS</h3>
            </div>
            <p>
              We have a dedicated team for editing that guarantees high-quality results delivered strictly on time, tailored absolutely to client requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
