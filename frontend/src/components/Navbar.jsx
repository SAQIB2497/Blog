

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between px-16 bg-blue-600 text-white h-12 py-2">
        <div className="text-xl cursor-pointer">Blog</div>
        <div className="space-x-7">
            <span className="text-xl cursor-pointer">Home</span>
            <span className="text-xl cursor-pointer">Create</span>
        </div>
    </div>
    </>
  );
}

export default Navbar;
