import React from 'react';
import ResourceList from '../components/ResourceList';
import LearningPaths from '../components/LearningPaths';
import Forum from '../components/Forum';
import Showcase from '../components/Showcase';

const Home = () => {
  return (
    <div>
      <h1>Welcome to VirtuoAI</h1>
      <ResourceList />
      <LearningPaths />
      <Forum />
      <Showcase />
    </div>
  );
};

export default Home;
