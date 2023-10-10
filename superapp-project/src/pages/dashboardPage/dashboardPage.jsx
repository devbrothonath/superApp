import React from "react";
import ProfileComp from "../../components/profileComponent/profileComp";
import WeatherComp from "../../components/weatherComponent/weatherComp";
import NewsComp from "../../components/newsComponent/newsComp";
import "./dashboardPage.css"

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="leftSide">
        <div>
          <ProfileComp />
        </div>
        <div>
          <WeatherComp/>
        </div>
      </div>
      <div className="rightSide">
        <NewsComp/>
      </div>
    </div>
  );
};

export default DashboardPage;
