"use client";
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const importData = [
  { partner: 'China', value: 111 },
  { partner: 'South Korea', value: 53 },
  { partner: 'Japan', value: 22 },
  { partner: 'Taipei, Chinese', value: 19 },
  { partner: 'United States', value: 14 },
];

const VietnamImportData = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={importData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="partner" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="Vietnam’s Top Import Partners (USD Billion)" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VietnamImportData;
