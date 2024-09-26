import { MultipleChart } from "@/components/ui/MultipleChart";
import { CustomPieChart } from "@/components/ui/CustomPieChart";
import { ChartBarInteractive } from "@/components/ChartBarInteractive";

export default function Home() {
  return (
    <>
      <div className="flex pt-2 justify-center space-x-4">
        <div className="p-2 bg-gray-200">
          <MultipleChart></MultipleChart>
        </div>

        <div className="p-2 bg-gray-200">
          <CustomPieChart></CustomPieChart>
        </div>
      </div>

      <div className="flex pt-2 justify-center space-x-4">
        <ChartBarInteractive></ChartBarInteractive>
      </div>
    </>
  );
}
