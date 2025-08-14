"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { userXAxis, userYAxis } from "@/utils/constants";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  SplineAreaSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

function UserChart() {
  const data = [
    { x: "USA", y: 46 },
    { x: "UK", y: 27 },
    { x: "Canada", y: 26 },
  ];

  return (
    <Card className="border-0 bg-white">
      <CardHeader className="font-semibold text-lg">User Growth</CardHeader>
      <CardContent className="">
        <ChartComponent
          primaryXAxis={{ valueType: "Category" }}
          title="User Growth"
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              ColumnSeries,
              Category,
              Tooltip,
              DataLabel,
              SplineAreaSeries,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName="day"
              yName="count"
              name="Column"
              type="Column"
              columnWidth={0.3}
              cornerRadius={{ topLeft: 10, topRight: 10 }} // ✅ Rounded corners
            />
            <SeriesDirective
              dataSource={data}
              xName="day"
              yName="count"
              type="SplineArea"
              name="Wave"
              fill="rgba(71, 132, 238, 0.3)"
              border={{ width: 2, color: "#4784EE" }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </CardContent>
    </Card>
  );
}

export default UserChart;
