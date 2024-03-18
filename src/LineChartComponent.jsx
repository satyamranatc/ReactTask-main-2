import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 10 },
  { name: 'Tue', uv: 20 },
  { name: 'Wed', uv: 15 },
  { name: 'Thu', uv: 13 },
  { name: 'Fri', uv: 30 },
  { name: 'Sat', uv: 17 },
  { name: 'Sun', uv: 25 },
];

const LineChartComponent = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }} // Adjusted margin to remove space for labels
        >
          {/* No CartesianGrid */}
          {/* No XAxis */}
          {/* No YAxis */}
          {/* No Tooltip */}
          {/* No Legend */}
          <Line type="monotone" dataKey="uv" stroke="#28C76F" strokeWidth={2} dot={false} /> {/* Green line */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
