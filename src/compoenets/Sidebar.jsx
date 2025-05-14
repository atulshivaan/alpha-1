import {
  FaTachometerAlt, FaUsers, FaChartLine, FaTasks,
  FaClipboardList, FaSearch, FaListAlt, FaPlusCircle, FaLifeRing
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const user = [
  { id: 1, name: "Harsh Kumar" }
];

const sidebarItems = [
  { id: 1, title: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
  { id: 2, title: "User List", icon: <FaUsers />, path: "/users" },
  { id: 3, title: "Sales Tracker", icon: <FaChartLine />, path: "/sales" },
  { id: 4, title: "Assign Task", icon: <FaTasks />, path: "/assign-task" },
  { id: 5, title: "View Task", icon: <FaClipboardList />, path: "/view-task" },
  { id: 6, title: "Advance Search", icon: <FaSearch />, path: "/search" },
  { id: 7, title: "Todo Task", icon: <FaListAlt />, path: "/todo" },
  { id: 8, title: "Add", icon: <FaPlusCircle />, path: "/add" },
  { id: 9, title: "Support", icon: <FaLifeRing />, path: "/support" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-1/5 h-full shadow-2xl mt-2  text-sm gap-2 p-1 bg-white flex flex-col">
      <div className="mb-2 border-b pb-3">
        {user.map(item => (
          <h1 key={item.id} className="text-lg mx-10 font-semibold text-gray-700">
            {item.name}
          </h1>
        ))}
      </div>

      {sidebarItems.map(item => {
        const isActive = location.pathname === item.path;

        return (
          <Link to={item.path} key={item.id}>
            <div
              className={`flex items-center gap-5 p-3 font-semibold rounded-lg cursor-pointer transition 
              ${isActive ? "bg-orange-200 text-amber-700 font-semibold" : "hover:bg-amber-700 text-gray-800"}`}
            >
              <span className={isActive ? "text-amber-700" : "text-gray-700"}>
                {item.icon}
              </span>
              <span>{item.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
