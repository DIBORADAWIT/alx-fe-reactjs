import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch function
const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery(["posts"], fetchPosts);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  ["cacheTime", "staleTime", "refetchOnWindowFocus", "keepPreviousData"];

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
