import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/post");
      const data = await response.json();
      if (response.ok) {
        setPosts(data.posts); // Update state with fetched posts
      } else {
        console.error(data.message); // Handle errors
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Delete a post by ID
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/post/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        // Update state to remove the deleted post from the list
        setPosts(posts.filter((post) => post._id !== id));
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <h2 className="text-4xl font-semibold mb-8">Posts List</h2>
      {posts.length === 0 ? (
        <p className="text-lg ">No posts available</p>
      ) : (
        <div className="w-full max-w-3xl space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6"
            >
              <h3 className="text-2xl font-semibold  mb-3">{post.title}</h3>
              <p className=" mb-4">{post.content}</p>
              <p className="text-sm mb-4">
                <strong>Author:</strong> {post.author}
              </p>
              <button
                onClick={() => handleDelete(post._id)} // Call delete function
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
