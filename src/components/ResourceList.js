import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AI_RESOURCES } from '../graphql/queries';

const ResourceList = () => {
  const { loading, error, data } = useQuery(GET_AI_RESOURCES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const aiResources = data.aiResources;

  return (
    <div>
      <h2>AI Resources</h2>
      <ul>
        {aiResources.map((resource) => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
