import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Blog Application</h1>
        <div className="space-x-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/create">Create Post</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;