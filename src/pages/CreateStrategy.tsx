import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStrategy } from '../store/strategySlice';
import { Strategy, TriggerCondition } from '../types/strategy';
import { PlusCircle } from 'lucide-react';

const CreateStrategy: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [buyTriggers, setBuyTriggers] = useState<TriggerCondition[]>([]);
  const [sellTriggers, setSellTriggers] = useState<TriggerCondition[]>([]);
  const [simulationSettings, setSimulationSettings] = useState({
    initialCapital: 10000,
    maxPositions: 5,
    stopLoss: 5,
    takeProfit: 10
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt' | 'status'> = {
      name,
      buyTriggers,
      sellTriggers,
      simulationSettings
    };
    
    dispatch(createStrategy(strategy));
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Strategy</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Strategy Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Simulation Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="initialCapital" className="block text-sm font-medium text-gray-700">
                Initial Capital
              </label>
              <input
                type="number"
                id="initialCapital"
                value={simulationSettings.initialCapital}
                onChange={(e) => setSimulationSettings({
                  ...simulationSettings,
                  initialCapital: Number(e.target.value)
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="maxPositions" className="block text-sm font-medium text-gray-700">
                Max Positions
              </label>
              <input
                type="number"
                id="maxPositions"
                value={simulationSettings.maxPositions}
                onChange={(e) => setSimulationSettings({
                  ...simulationSettings,
                  maxPositions: Number(e.target.value)
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="stopLoss" className="block text-sm font-medium text-gray-700">
                Stop Loss (%)
              </label>
              <input
                type="number"
                id="stopLoss"
                value={simulationSettings.stopLoss}
                onChange={(e) => setSimulationSettings({
                  ...simulationSettings,
                  stopLoss: Number(e.target.value)
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="takeProfit" className="block text-sm font-medium text-gray-700">
                Take Profit (%)
              </label>
              <input
                type="number"
                id="takeProfit"
                value={simulationSettings.takeProfit}
                onChange={(e) => setSimulationSettings({
                  ...simulationSettings,
                  takeProfit: Number(e.target.value)
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Create Strategy
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStrategy;