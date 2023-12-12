import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LEARNING_PATHS } from '../graphql/queries';

const LearningPaths = () => {
  const { loading, error, data } = useQuery(GET_LEARNING_PATHS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const learningPaths = data.learningPaths;

  return (
    <div>
      <h2>Learning Paths</h2>
      <ul>
        {learningPaths.map((path) => (
          <li key={path.id}>{path.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningPaths;
