// import { useState, useContext, createContext } from "react";

// const postContext = createContext();

// export const usePostsValue = () => {
//   const value = useContext(postContext);
//   return value;
// };

// export const PostContextProvider = ({ children }) => {
//   const [savedPosts, setSavedPosts] = useState([]);

//   const resetPosts = () => setSavedPosts([]);

//   const savePost = (post) => {
//     const isSaved = savedPosts.find((p) => p.id === post.id);
//     if (isSaved) {
//       return alert("Post is already saved.");
//     }
//     setSavedPosts((prev) => [post, ...prev]);
//   };

//   // create a function to unsave post here

//   return (
//     <postContext.Provider
//       value={{ savedPosts, setSavedPosts, resetPosts, savePost }}
//     >
//       {children}
//     </postContext.Provider>
//   );
// };
import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const savePost = (post) => {
    const isSaved = savedPosts.find((p) => p.id === post.id);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  // Create a function to unsave post
  const unsavePost = (postId) => {
    setSavedPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost, unsavePost }}
    >
      {children}
    </postContext.Provider>
  );
};
