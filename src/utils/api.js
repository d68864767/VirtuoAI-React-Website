src/utils/api.js

import { gql } from '@apollo/client';

// Define GraphQL queries and mutations
export const GET_AI_RESOURCES = gql`
  query GetAIResources {
    aiResources {
      id
      title
      description
      url
    }
  }
`;

export const GET_LEARNING_PATHS = gql`
  query GetLearningPaths {
    learningPaths {
      id
      title
      description
      steps {
        id
        title
        description
      }
    }
  }
`;

export const GET_FORUM_POSTS = gql`
  query GetForumPosts {
    forumPosts {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`;

export const GET_SHOWCASE_PROJECTS = gql`
  query GetShowcaseProjects {
    showcaseProjects {
      id
      title
      description
      url
      author {
        id
        name
      }
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile($userId: ID!) {
    userProfile(userId: $userId) {
      id
      name
      email
      learningProgress {
        id
        learningPath {
          id
          title
        }
        completedSteps {
          id
          title
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

// Define API functions for making requests
const api = {
  getAIResources: async () => {
    const response = await client.query({ query: GET_AI_RESOURCES });
    return response.data.aiResources;
  },
  getLearningPaths: async () => {
    const response = await client.query({ query: GET_LEARNING_PATHS });
    return response.data.learningPaths;
  },
  getForumPosts: async () => {
    const response = await client.query({ query: GET_FORUM_POSTS });
    return response.data.forumPosts;
  },
  getShowcaseProjects: async () => {
    const response = await client.query({ query: GET_SHOWCASE_PROJECTS });
    return response.data.showcaseProjects;
  },
  getUserProfile: async (userId) => {
    const response = await client.query({
      query: GET_USER_PROFILE,
      variables: { userId },
    });
    return response.data.userProfile;
  },
  login: async (username, password) => {
    const response = await client.mutate({
      mutation: LOGIN,
      variables: { username, password },
    });
    return response.data.login;
  },
  logout: async () => {
    const response = await client.mutate({ mutation: LOGOUT });
    return response.data.logout;
  },
};

export default api;
