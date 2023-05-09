import { BusinessCenter, School } from "@mui/icons-material";
import React from "react";

const Experience = () => {
  return (
    <div className="expContainer">
      <div className="expElements">
        <ol>
          <li>
            <School />
            <h3>High School Graduation 2011</h3>
            <p>Akpinar Anatolian Teacher's High School</p>
          </li>
          <li>
            <School />
            <h3>University Graduation 2015</h3>
            <p>Military Academy Industrial Engineering</p>
          </li>
          <li>
            <School />
            <h3>University Graduation 2015</h3>
            <p>Military Academy Industrial Engineering</p>
          </li>
          <li>
            <BusinessCenter />
            <h3>My First Job As a Front-End Dev</h3>
            <p>---</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
