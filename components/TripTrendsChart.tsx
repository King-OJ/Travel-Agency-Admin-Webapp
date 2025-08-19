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
  LineChart,
  Area,
  ComposedChart,
  Cell,
} from "recharts";

function TripTrendsChart() {
  const data = [
    { name: "City", trips: 25 },
    { name: "Nature", trips: 20 },
    { name: "Beach", trips: 50 },
    { name: "Cultural", trips: 15 },

    { name: "Culinary", trips: 40 },
    { name: "Relax", trips: 15 },
    { name: "Adventure", trips: 35 },
  ];

  const maxTrip = Math.max(...data.map((d) => d.trips));

  return (
    <Card className="border-0 bg-white">
      <CardHeader>
        <CardTitle>Trip Trends</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#7f7e83", fontSize: 12 }} />
            <YAxis axisLine={false} tick={{ fill: "#7f7e83", fontSize: 12 }} />
            <Tooltip />

            <Bar dataKey="trips" radius={[10, 10, 0, 0]} barSize={30}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.trips === maxTrip ? "#256ff1" : "#E5EAFC"}
                />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default TripTrendsChart;
