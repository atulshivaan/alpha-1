const Card = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.state === "completed").length;
  const pending = tasks.filter(t => t.state === "pending").length;
  const due = tasks.filter(t => t.state === "due").length;
  const expired = tasks.filter(t => t.state === "expired").length;

  const stats = [
    { label: "Total", count: total, color: "text-blue-600" },
    { label: "Completed", count: completed, color: "text-green-600" },
    { label: "Pending", count: pending, color: "text-yellow-600" },
    { label: "Due", count: due, color: "text-orange-600" },
    { label: "Expired", count: expired, color: "text-red-600" },
  ];

  return (
    <div className="flex justify-between gap-4 p-2  rounded-lg">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white px-2 py-1 rounded-xl shadow-sm w-full"
        >
          <h2 className="text-md font-medium text-gray-700">{stat.label}</h2>
          <p className={`text-xl font-bold ${stat.color}`}>{stat.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;

