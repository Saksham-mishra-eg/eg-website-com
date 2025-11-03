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
  { partner: 'United States', value: 99 },
  { partner: 'China', value: 61 },
  { partner: 'South Korea', value: 25 },
  { partner: 'Japan', value: 24 },
  { partner: 'Netherlands', value: 11 },
];

const VietnamExportData = () => {
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
          <Bar dataKey="value" name="Vietnam’s Top Export Partners (USD Billion)" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VietnamExportData;
