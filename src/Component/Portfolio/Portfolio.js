// Minuto 1:51:34

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    axios
      .get("https://backendportfolioreactnode.herokuapp.com/Portfolio")
      .then((res) => setProjects(res.data));
  }, [setProjects]);

  return (
    <>
        {projects && projects.map((project, index) => 

        )}
    </>
  );
}

export default Portfolio;
