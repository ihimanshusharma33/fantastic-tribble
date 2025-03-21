import React, { useState } from "react";
import { Play } from "lucide-react";

const Stimulate: React.FC = () => {
  const [tokens, setTokens] = useState(100);
  const [buyTrigger, setBuyTrigger] = useState("");
  const [sellTrigger, setSellTrigger] = useState("");
  const [portfolioManagement, setPortfolioManagement] = useState("");

  return (
    <div className="min-h-screen border rounded-md bg-white p-6">
      <h1 className="text-2xl text-gray-900 font-semibold flex items-center gap-2">
        🔄 Trading Simulator
      </h1>
      <p className="text-gray-400">Test your trading strategies with our advanced simulation engine</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">Buy Trigger <span className="text-green-600">&rarr;</span></h2>
          <input
            type="text"
            value={buyTrigger}
            onChange={(e) => setBuyTrigger(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-md mt-2"
            placeholder="Enter buy trigger conditions..."
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">Sell Trigger <span className="text-red-600">&rarr;</span></h2>
          <input
            type="text"
            value={sellTrigger}
            onChange={(e) => setSellTrigger(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-md mt-2"
            placeholder="Enter sell trigger conditions..."
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">Portfolio Management <span className="text-blue-600">&rarr;</span></h2>
          <input
            type="text"
            value={portfolioManagement}
            onChange={(e) => setPortfolioManagement(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-md mt-2"
            placeholder="Enter portfolio management rules..."
          />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-medium">Simulation Settings</h2>
        <p className="text-gray-400">Configure your simulation parameters</p>
        <div className="mt-4 flex items-center gap-4">
          <label className="text-gray-700">Tokens:</label>
          <input
            type="number"
            value={tokens}
            onChange={(e) => setTokens(parseInt(e.target.value) || 0)}
            className="w-24 h-10 bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-md"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
            <Play size={16} /> Simulate
          </button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-medium flex items-center gap-2">
          ⏳ Simulation Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-md font-medium">Performance Metrics</h3>
            <p className="text-gray-400">Stats and graphs will appear here after simulation</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-md font-medium">Simulation Orders</h3>
            <p className="text-gray-400">Trading orders will appear here after simulation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stimulate;