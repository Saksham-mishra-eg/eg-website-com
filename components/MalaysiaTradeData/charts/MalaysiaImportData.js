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
  { partner: 'China', value: 64 },
  { partner: 'Singapore', value: 36 },
  { partner: 'United States', value: 27 },
  { partner: 'Taipei, Chinese', value: 23 },
  { partner: 'Japan', value: 15 },
];

const MalaysiaImportData = () => {
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
          <Bar dataKey="value" name="Malaysia’s Top Import Partners (USD Billion)" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MalaysiaImportData;
