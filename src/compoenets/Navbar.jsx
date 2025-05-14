import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[8vh] bg-white text-black shadow-md flex items-center justify-between px-2">
      <h1 className="text-2xl font-bold mx-4 flex items-center gap-2">
        
        <span className="text-amber-600">Digi</span>Code
      </h1>

      <button className="text-black font-semibold px-4 py-1 rounded">
        <FaRegUserCircle className="text-2xl cursor-pointer" />
      </button>
    </div>
  );
};

export default Navbar;
