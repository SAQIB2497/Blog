import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
