import React, { useState } from "react";
import { Plus, ChevronRight } from "lucide-react";

interface Config {
  id: string;
  startMargin: number;
  perOrderValue: number;
  maxHoldingCount: number;
}

const PortfolioConfig: React.FC = () => {
  const [configs, setConfigs] = useState<Config[]>([
    { id: "config-001", startMargin: 0, perOrderValue: 1000, maxHoldingCount: 10 },
    { id: "config-002", startMargin: 0, perOrderValue: 2000, maxHoldingCount: 15 },
  ]);

  const addConfiguration = () => {
    const newConfig: Config = {
      id: `config-${configs.length + 1}`,
      startMargin: 0,
      perOrderValue: 1000,
      maxHoldingCount: 10,
    };
    setConfigs([...configs, newConfig]);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <ChevronRight size={18} /> Portfolio Management Configuration
      </h2>
      <div className="mt-4 space-y-4">
        {configs.map((config) => (
          <div key={config.id} className="p-4 border rounded-lg space-y-2">
            <h3 className="font-medium">{config.id}</h3>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm text-gray-600">Start Margin</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border rounded"
                  value={config.startMargin}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Per-Order Value</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border rounded"
                  value={config.perOrderValue}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Max Holding Count</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border rounded"
                  value={config.maxHoldingCount}
                  readOnly
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={addConfiguration}
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Plus size={16} /> Add Configuration
      </button>
    </div>
  );
}
export default PortfolioConfig; 