// create post context here

// Create custom hook that returns context value here

// create a custom saved post provider here with add and reset functions
// postContext.js

import { createContext, useContext, useState } from 'react';

// Create post context
const PostContext = createContext();

// Create custom saved post provider with add and reset functions
export const PostProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const addPost = (post) => {
    setSavedPosts((prevPosts) => {
      if (prevPosts.includes(post)) return prevPosts; // Avoid duplicates
      return [...prevPosts, post];
    });
  };

  const resetPosts = () => {
    setSavedPosts([]);
  };

  return (
    <PostContext.Provider value={{ savedPosts, addPost, resetPosts }}>
      {children}
    </PostContext.Provider>
  );
};

// Create custom hook that returns context value
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
