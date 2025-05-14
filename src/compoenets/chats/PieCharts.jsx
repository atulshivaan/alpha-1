import { PieChart } from '@mui/x-charts/PieChart';

const PieCharts = ({ taskStateData }) => {
  return (
    <div className="bg-white w-full sm:w-1/2 lg:w-2/5 min-w-[470px] p-2 rounded-lg shadow flex flex-col items-center">
      <h2 className="text-md font-semibold mb-2">Task Distribution</h2>
      <PieChart
        series={[
          {
            data: taskStateData.map((item, index) => ({
              ...item,
              color: ['#facc15', '#4ade80', '#60a5fa', '#f87171'][index],
            })),
            innerRadius: 40,
            outerRadius: 50,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 360,
          },
        ]}
        width={250}
        height={195}
      />
    </div>
  );
};

export default PieCharts;
