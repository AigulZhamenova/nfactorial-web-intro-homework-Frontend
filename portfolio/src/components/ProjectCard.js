import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link}>Подробнее</a>
    </Card>
  );
};

export default ProjectCard;
