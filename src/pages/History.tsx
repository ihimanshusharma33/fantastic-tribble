import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { History as HistoryIcon, TrendingUp, TrendingDown } from 'lucide-react';

const History: React.FC = () => {
  const strategies = useSelector((state: RootState) => 
    state.strategy.strategies.filter(s => s.status === 'COMPLETED')
  );

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Strategy History
          </h2>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        {strategies.length > 0 ? (
          <ul role="list" className="divide-y divide-gray-100">
            {strategies.map((strategy) => (
              <li key={strategy.id} className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <HistoryIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{strategy.name}</h3>
                      <p className="text-xs text-gray-500">
                        Completed on {new Date(strategy.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {strategy.results && (
                    <div className="flex items-center space-x-4">
                      <div className="text-sm">
                        <span className="text-gray-500">Return:</span>
                        <span className={`ml-1 font-medium ${
                          strategy.results.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {strategy.results.totalReturn >= 0 ? (
                            <TrendingUp className="inline h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="inline h-4 w-4 mr-1" />
                          )}
                          {strategy.results.totalReturn}%
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Win Rate:</span>
                        <span className="ml-1 font-medium text-gray-900">
                          {strategy.results.winRate}%
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Trades:</span>
                        <span className="ml-1 font-medium text-gray-900">
                          {strategy.results.trades}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <HistoryIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No completed strategies</h3>
            <p className="mt-1 text-sm text-gray-500">
              Completed strategies will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;