

import { LineChart } from '@mui/x-charts/LineChart';

const Linecharts = () => {
  return (
    <div className="bg-white w-full  sm:w-1/2 lg:w-2/5 min-w-[450px] p-4 rounded-lg shadow">
      <h2 className="text-md font-semibold mb-2">Task Trend Overview</h2>
      <LineChart
        xAxis={[{ data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], scaleType: 'band' }]}
        yAxis={[{ min: 0, max: 4, tickMinStep: 1 }]}
        series={[{ data: [1, 2, 1, 3, 1, 2, 3], label: 'Tasks', color: '#3b82f6' }]}
        height={150}
      />
    </div>
  );
};

export default Linecharts;
