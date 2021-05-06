// Minuto 2:28:32

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    axios.get("https://backendportfolioreactnode.herokuapp.com/Portfolio")
      .then(
        res => setProjects(res.data)
  )}, [setProjects])

  return(
    <>
      <div className="mega-card-portfolio">
        { projects.length > 0 && projects.map((project, index) => (
            <div className="single-card">
              <h1>{project.name}</h1>
              <img
                className="image-project"
                alt="img-project"
                src={project.image}
              />
              <p>{project.descripcion}</p>
              <a className="button-tovisit" href={project.link}>
                Visitar Proyecto
              </a>
            </div>
          ))}
      </div>
    </>
  );
}

export default Portfolio;
