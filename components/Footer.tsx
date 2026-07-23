import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="container">
        <p className="foot-kicker">04 — Contact · Open Source</p>
        
        <h2 className="foot-display">
          Type it<br />
          <span className="ow">in, get</span><br />
          a number.
        </h2>

        <p className="foot-about">Built as part of ML Internship at Assam Skill University.</p>

        <a
          href="https://github.com/ASU-ML-Project/ML-Salary-Prediction-Production"
          target="_blank"
          rel="noopener noreferrer"
          className="foot-link"
        >
          View the Source ↗
        </a>

        <div className="foot-grid">
          <div className="foot-col">
            <h3>Project</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/ASU-ML-Project/ML-Salary-Prediction-Production/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Docs ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h3>Stack</h3>
            <ul>
              <li>FastAPI</li>
              <li>Next.js</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div className="foot-col foot-col-team">
            <h3>Team</h3>
            <ul className="team-list">
              <li className="team-member">
                <a
                  href="https://www.linkedin.com/in/himangshukeot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  Himangshu Keot ↗
                </a>
                <a href="mailto:keothimangshu@gmail.com" className="team-email">
                  keothimangshu@gmail.com
                </a>
              </li>
              <li className="team-member">
                <a
                  href="https://www.linkedin.com/in/yuvrajjitbaruah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  Yuvrajjit Baruah ↗
                </a>
                <a href="mailto:dev.yuvrajjitbaruah@gmail.com" className="team-email">
                  dev.yuvrajjitbaruah@gmail.com
                </a>
              </li>
              <li className="team-member">
                <a
                  href="https://www.linkedin.com/in/nishritkashyap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  Nishrit Kashyap ↗
                </a>
                <a href="mailto:kashyapnishrit@gmail.com" className="team-email">
                  kashyapnishrit@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-legal">
          <span>© 2026 CompAnalytics. All rights reserved.</span>
          <span>A model is a guess with good manners</span>
          <span>Assam — India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
