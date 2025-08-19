"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Area,
  ComposedChart,
} from "recharts";

function UserGrowthChart() {
  const data = [
    { month: "Mar", users: 2400 },
    { month: "Apr", users: 1800 },
    { month: "May", users: 2800 },
    { month: "Jun", users: 1500 },
    { month: "Jul", users: 1800 },
    { month: "Aug", users: 1600 },
  ];

  return (
    <Card className="border-0 bg-white">
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "#7f7e83", fontSize: 12 }} />
            <YAxis
              tickFormatter={(value) => `${value / 1000}k`}
              axisLine={false}
              tick={{ fill: "#7f7e83", fontSize: 12 }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="none"
              fill="rgba(37, 111, 241, 0.2)" // light transparent blue
              activeDot={false}
            />
            <Bar
              dataKey="users"
              fill="#256ff1"
              radius={[10, 10, 0, 0]}
              barSize={35}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#256ff1"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default UserGrowthChart;
