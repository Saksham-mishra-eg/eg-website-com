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

// Malaysia trade data
const data = [
  { year: '2020', exports: 233, imports: 189 },
  { year: '2021', exports: 299, imports: 238 },
  { year: '2022', exports: 353, imports: 295 },
  { year: '2023', exports: 312, imports: 265 },
  { year: '2024', exports: 330, imports: 300 },
];

const MalaysiaChartGraph = () => {
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
            name="Malaysia's Exports (USD Billion)"
            fill="#2b81a8"
            activeShape={(props) => <Rectangle {...props} fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="imports"
            name="Malaysia's Imports (USD Billion)"
            fill="#407BFF"
            activeShape={(props) => <Rectangle {...props} fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MalaysiaChartGraph;
