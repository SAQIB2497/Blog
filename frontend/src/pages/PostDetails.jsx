import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      <p className="mt-4 text-gray-500">Author: {post.author}</p>
    </div>
  );
}

export default PostDetails;
