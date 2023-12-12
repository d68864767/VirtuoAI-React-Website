import { gql } from '@apollo/client';

export const GET_AI_RESOURCES = gql`
  query GetAIResources {
    aiResources {
      id
      title
    }
  }
`;

export const GET_LEARNING_PATHS = gql`
  query GetLearningPaths {
    learningPaths {
      id
      title
    }
  }
`;

export const GET_FORUM_POSTS = gql`
  query GetForumPosts {
    forumPosts {
      id
      title
      content
      author
      createdAt
    }
  }
`;

// Add more queries as needed
