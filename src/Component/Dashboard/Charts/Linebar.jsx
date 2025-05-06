import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const Linebar = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="watchTime"/>
      <Tooltip />
      <Area
        type="monotone"
        dataKey="left"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="watchTime"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Linebar;
