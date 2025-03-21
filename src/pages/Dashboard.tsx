import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';
import { PlusCircle, Activity, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const strategies = useSelector((state: RootState) => state.strategy.strategies);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'RUNNING':
        return <Activity className="h-5 w-5 text-blue-500" />;
      case 'COMPLETED':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'SUBMITTED':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Trading Strategies
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Link
            to="/create"
            className="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            <PlusCircle className="h-5 w-5 mr-1" />
            New Strategy
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <ul role="list" className="divide-y divide-gray-100">
          {strategies.map((strategy) => (
            <li key={strategy.id} className="flex items-center justify-between gap-x-6 py-5 px-5 hover:bg-gray-50">
              <div className="min-w-0">
                <div className="flex items-center gap-x-3">
                  {getStatusIcon(strategy.status)}
                  <p className="text-sm font-semibold leading-6 text-gray-900">{strategy.name}</p>
                  <span className={`rounded-md px-2 py-1 text-xs font-medium ${
                    strategy.status === 'COMPLETED' ? 'bg-green-50 text-green-700' :
                    strategy.status === 'RUNNING' ? 'bg-blue-50 text-blue-700' :
                    strategy.status === 'SUBMITTED' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-gray-50 text-gray-700'
                  }`}>
                    {strategy.status}
                  </span>
                </div>
                {strategy.results && (
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p>Return: {strategy.results.totalReturn}%</p>
                    <span aria-hidden="true">&middot;</span>
                    <p>Win Rate: {strategy.results.winRate}%</p>
                    <span aria-hidden="true">&middot;</span>
                    <p>Trades: {strategy.results.trades}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-none items-center gap-x-4">
                <Link
                  to={`/strategy/${strategy.id}`}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  View details
                </Link>
              </div>
            </li>
          ))}
          {strategies.length === 0 && (
            <li className="py-12">
              <div className="text-center">
                <PlusCircle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No strategies</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new strategy.</p>
                <div className="mt-6">
                  <Link
                    to="/create"
                    className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    <PlusCircle className="h-5 w-5 mr-1" />
                    New Strategy
                  </Link>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;