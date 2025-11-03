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

const exportData = [
  { partner: 'Singapore', value: 50 },
  { partner: 'United States', value: 43 },
  { partner: 'China', value: 41 },
  { partner: 'Hong Kong', value: 19 },
  { partner: 'Japan', value: 18 },
];

const MalaysiaExportData = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={exportData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="partner" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="Malaysia’s Top Export Partners (USD Billion)" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MalaysiaExportData;
