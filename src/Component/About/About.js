import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

function About() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://backendportfolioreactnode.herokuapp.com/About")
      .then((res) => setInformation(res.data[0]));
  });
  return (
    <div className="About">
      <div className="div-photo">
        <img
          className="profile-photo"
          alt="profile-photo"
          src={information.photo}
        />
      </div>
      <div className="description">
        <h1>{information.name}</h1>
        <h2>{information.profession}</h2>
        <p>{information.about_me}</p>
        <ul className="skills">
          {information.skills &&
            information.skills.map((skill, index) => (
              <p className="skill">{skill}</p>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
