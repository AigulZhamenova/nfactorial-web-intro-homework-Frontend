import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Проект 1",
      description: "Описание проекта 1",
      link: "#",
    },
    {
      title: "Проект 2",
      description: "Описание проекта 2",
      link: "#",
    },
  ];

  return (
    <section>
      <h2>Мои проекты</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
