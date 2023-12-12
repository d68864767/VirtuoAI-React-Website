import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FORUM_POSTS } from '../graphql/queries';

const Forum = () => {
  const { loading, error, data } = useQuery(GET_FORUM_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const forumPosts = data.forumPosts;

  return (
    <div>
      <h2>Forum</h2>
      <ul>
        {forumPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Posted by: {post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
