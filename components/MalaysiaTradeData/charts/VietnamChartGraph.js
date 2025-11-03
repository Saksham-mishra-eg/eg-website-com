"use client";
import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Vietnam trade data
const data = [
  { year: '2020', exports: 281, imports: 261 },
  { year: '2021', exports: 335, imports: 330 },
  { year: '2022', exports: 370, imports: 358 },
  { year: '2023', exports: 353, imports: 325 },
  { year: '2024', exports: 519, imports: 382 },
];

const VietnamChartGraph = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="exports"
            name="Vietnam’s Exports to World (USD Billion)"
            fill="#2b81a8"
            activeShape={(props) => <Rectangle {...props} fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="imports"
            name="Vietnam’s Imports from World (USD Billion)"
            fill="#407BFF"
            activeShape={(props) => <Rectangle {...props} fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VietnamChartGraph;
