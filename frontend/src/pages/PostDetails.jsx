import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/post/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data.getPostbyId));
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:4000/api/post/${id}`, { method: 'DELETE' });
    navigate('/');
  };

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <button onClick={handleDelete}>Delete Post</button>
          <button onClick={() => navigate(`/edit/${post._id}`)}>Edit Post</button>
        </>
      )}
    </div>
  );
}

export default PostDetails;
