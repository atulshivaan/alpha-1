import Card from "../../compoenets/card/Card";
import Linecharts from "../../compoenets/chats/Linecharts";
import PieCharts from "../../compoenets/chats/PieCharts";
import TaskTable from "../../compoenets/table/Table";

const tasks = [
  { id: 1, task: "Finish report", state: "pending", createDate: "14/07/2024", endDate: "15/09/2024" },
  { id: 2, task: "Review pull request", state: "completed" },
  { id: 3, task: "Schedule meeting", state: "due" },
  { id: 4, task: "Fix bug", state: "expired" },
];

const taskStateData = [
  { id: 0, value: tasks.filter(t => t.state === 'pending').length, label: 'Pending' },
  { id: 1, value: tasks.filter(t => t.state === 'completed').length, label: 'Completed' },
  { id: 2, value: tasks.filter(t => t.state === 'due').length, label: 'Due' },
  { id: 3, value: tasks.filter(t => t.state === 'expired').length, label: 'Expired' },
];

const Dashboard = () => {
  return (
    <div className="-full flex flex-col space-y-2">
      <Card tasks={tasks} />

<div className="flex flex-wrap">
  <div className="w-full md:w-1/2 mt-2 p-1">
    <PieCharts taskStateData={taskStateData} />
  </div>
  <div className="w-full md:w-1/2 mt-2 p-1">
    <Linecharts />
  </div>
</div>
     
      <div className="bg-white p-1 rounded-lg shadow mt-6 overflow-x-auto">
        <h2 className="text-md font-semibold mb-4">Task Table</h2>
        <TaskTable tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
