import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compoenets/Navbar";
import Sidebar from "./compoenets/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import UserList from "./pages/dashboard/UserList";
import AdvanceSearch from "./pages/dashboard/AdvanceSearch";
import SalesTracker from "./pages/dashboard/SalesTracker";
import TodoTask from "./pages/dashboard/TodoTask";
import Support from "./pages/dashboard/Support";
import ViewTask from "./pages/dashboard/ViewTask";
import Add from "./pages/dashboard/Add";
import AssignTask from "./pages/dashboard/AssignTask";

function App() {
  return (
    <Router>
      <div className="h-screen bg-zinc-200 flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-2 h-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/search" element={<AdvanceSearch />} />
              <Route path="/sales" element={<SalesTracker />} />
              <Route path="/todo" element={<TodoTask />} />
              <Route path="/support" element={<Support />} />
              <Route path="/view-task" element={<ViewTask />} />
              <Route path="/add" element={<Add />} />
              <Route path="/assign-task" element={<AssignTask />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

