import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import aditipic from "../assets/img/aditi.jpg";
import React from "react";

export const Team = () => {

  const handleMailAditi = () => {
    const predefinedEmail = 'parneet2123@gmail.com';
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(predefinedEmail)}`;
    window.open(composeUrl);
  };

  let message = `Meet the team behind Ai Therapist.`;
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">Team
            </h2>
            <h3 class="section-subtitle">{message}</h3>
            
          </div>
          <div class="col-sm-5 col-md-3">
            <div class="team-item">
              <img src={aditipic} class="team-img" alt="pic" />
              <h3>Parneet</h3>
              <div class="team-info">
                <p>Tech Enthusiast</p>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/parneet-singh-046276225/" target="_blank">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://www.instagram.com/insiderlyc_/" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                <img src={navIcon3} alt="Icon" onClick={handleMailAditi} target="_blank"/>
                </a>
              </div>
            </div>
          </div>
    <div class="col-sm-5 col-md-3">
            <div class="team-item">
              <img src={vaibhavpic} class="team-img" alt="pic" />
              <h3>Prabhmeet Singh</h3>
              <div class="team-info">
                <p>Cyber Geek</p>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/parneet-singh-046276225/"
                  target="_blank">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/parneet-2123" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                <img src={navIcon3} alt="Icon" onClick={handleMailVaibhav} target="_blank"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
