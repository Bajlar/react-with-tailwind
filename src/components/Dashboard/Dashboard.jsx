import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Create an array to store the student objects
const students = [
  { name: "Student 1", physics: 85, chemistry: 75, math: 90 },
  { name: "Student 2", physics: 70, chemistry: 80, math: 95 },
  { name: "Student 3", physics: 60, chemistry: 65, math: 75 },
  { name: "Student 4", physics: 90, chemistry: 85, math: 80 },
  { name: "Student 5", physics: 75, chemistry: 70, math: 85 },
  { name: "Student 6", physics: 80, chemistry: 75, math: 90 },
  { name: "Student 7", physics: 65, chemistry: 80, math: 75 },
  { name: "Student 8", physics: 85, chemistry: 90, math: 95 },
  { name: "Student 9", physics: 75, chemistry: 70, math: 80 },
  { name: "Student 10", physics: 80, chemistry: 75, math: 90 },
  { name: "Student 11", physics: 90, chemistry: 85, math: 80 },
  { name: "Student 12", physics: 70, chemistry: 80, math: 95 }
];

  return (
    <div className='w-3/4 mx-auto mt-4'>
      <LineChart
        width={1000}
        height={300}
        data={students}
      >
        <Line dataKey='math' stroke='#8884d8'></Line>
        <Line dataKey='chemistry' stroke='yellowgreen'></Line>
        <Line dataKey='physics' stroke='hotpink'></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;