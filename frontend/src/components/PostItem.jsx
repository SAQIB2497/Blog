import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to={`/post/${post._id}`}>Read More</Link>
    </div>
  );
}

export default PostItem;