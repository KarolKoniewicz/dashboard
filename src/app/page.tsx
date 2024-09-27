"use client";

import { MultipleChart } from "@/components/ui/MultipleChart";
import { CustomPieChart } from "@/components/ui/CustomPieChart";
import { ChartBarInteractive } from "@/components/ui/ChartBarInteractive";
import { ChartLine } from "@/components/ui/ChartLine";
import { ChartBarNegative } from "@/components/ui/ChartBarNegative";
import { useEffect } from 'react';
import { CustomRadarChart } from "@/components/ui/CustomRadarChart";
import { RadarChartLabel } from "@/components/ui/RadarChartLabel";
import { RadialChart } from "@/components/ui/RadialChart";

export default function Home() {


  useEffect(() => {
    const userLocale = navigator.language || 'en-US';
  }, []);


  return (
    <>
      <div className="flex pt-2 justify-center space-x-4">
        <div className="p-2 bg-gray-200">
          <MultipleChart></MultipleChart>
        </div>

        <div className="p-2 bg-gray-200">
          <CustomPieChart></CustomPieChart>
        </div>

        <div className="p-2 bg-gray-200">
          <ChartBarNegative></ChartBarNegative>
        </div>

        <div className="p-2 bg-gray-200">
          <ChartLine></ChartLine>
        </div>
      </div>


      <div className="flex pt-2 justify-center space-x-4">
        <div className="p-2 bg-gray-200">
          <CustomRadarChart></CustomRadarChart>
        </div>
        <div className="p-2 bg-gray-200">
          <RadarChartLabel></RadarChartLabel>
        </div>
        <div className="p-2 bg-gray-200">
          <RadialChart></RadialChart>
        </div>
      </div>

      <div className="flex pt-2 justify-center space-x-4">
        <ChartBarInteractive></ChartBarInteractive>
      </div>
    </>
  );
}
