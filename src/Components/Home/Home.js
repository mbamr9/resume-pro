import React from "react";
import Typical from "react-typical";
import "./Home.css";
const Home = () => {
  return (<>
    <div className="home_container">
      <div className="home_parent">
        <div className="home_details">
          <div className="colz">
            <div className="profile_details_name">
              <span className="primary_text">
                Hello , I'm <span className="highlighted_text">mohammad</span>
              </span>
            </div>
            <div className="colz_icon">
              <a href="https://t.me/heis_eska">
                <i className="fab fa-telegram-plane"></i>
              </a>

              <a href="https://www.instagram.com/heis_eska/">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/heis_eska/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="profile_details_roles">
              <span className="primary_text">
                <h1>
                  <Typical
                    steps={[
                      "Enthusiastic ✔",
                      1000,
                      "MERN Stack",
                      1000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </h1>
                <span className="profile_role_tagline">
                  building applications with front and back end operations
                </span>
              </span>
            </div>
            <div className="profile_options">
              <button className="btn primary_btn">Hire Me</button>
              <a href="https://www.instagram.com/heis_eska/">
                <button className="btn highlighted_btn">Hire Me</button>
              </a>
            </div>
          </div>
          <div className="profile_picture">
            <div className="profile_picture_background">

            </div>
          </div>
        </div>
      </div>

       <div className='back_img'>
         
       </div>
    </div>
   
    </>
  );
};

export default Home;
