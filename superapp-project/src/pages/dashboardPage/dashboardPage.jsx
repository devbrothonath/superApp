import React from "react";
import ProfileComp from "../../components/profileComponent/profileComp";
import WeatherComp from "../../components/weatherComponent/weatherComp";
import NewsComp from "../../components/newsComponent/newsComp";
import NotesComp from "../../components/notesComponent/notesComp";
import TimerComp from "../../components/timerComponent/timerComp";
import "./dashboardPage.css";

const DashboardPage = () => {
  const moviesSection = () => {
    window.location.href = "/movies"
  }
  return (
    <div className="dashboard">
      <div className="leftSide">
        <div className="pfl_wtr_nts">
          <div className="pfl_wtr">
            <div>
              <ProfileComp />
            </div>
            <div>
              <WeatherComp />
            </div>
          </div>
          <div className="nts">
            <NotesComp />
          </div>
        </div>
        <div className="timer">
          <TimerComp />
        </div>
      </div>
      <div className="rightSide">
        <NewsComp />
      </div>
      {/* <div>
        <button onClick={moviesSection}>Browse</button>
      </div> */}
    </div>
  );
};

export default DashboardPage;
