import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOWCASE_PROJECTS } from '../graphql/queries';

const Showcase = () => {
  const { loading, error, data } = useQuery(GET_SHOWCASE_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const showcaseProjects = data.showcaseProjects;

  return (
    <div>
      <h2>Showcase</h2>
      <ul>
        {showcaseProjects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Showcase;
