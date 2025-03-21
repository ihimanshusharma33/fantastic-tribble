import React, { useState } from 'react';
import { LineChart, DollarSign, Earth } from 'lucide-react';
import { LineChart as Linear, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Link } from 'react-router-dom';

const data = [
  { date: "Mar 1", price: 120 },
  { date: "Mar 2", price: 130 },
  { date: "Mar 3", price: 125 },
  { date: "Mar 4", price: 140 },
  { date: "Mar 5", price: 135 },
];

const Features: React.FC = () => {
  const globalMarkets = [
    { name: 'NYSE', country: 'United States' },
    { name: 'NASDAQ', country: 'United States' },
    { name: 'LSE', country: 'United Kingdom' },
    { name: 'TSE', country: 'Japan' },
    { name: 'SSE', country: 'China' },
    { name: 'NSE', country: 'India' },
    { name: 'Deutsche Börse', country: 'Germany' },
    { name: 'Euronext', country: 'European Union' }
  ];

  const features = [
    { label: 'Screening Rules', link: '/create' },
    { label: 'Portfolio Management', link: '/portfolio-management' },
    { label: 'Buy Triggers Rules', link: '/buy-triggers-rules' },
    { label: 'Sell Triggers Rules', link: '/sell-triggers-rules' },
    { label: 'Simulate', link: '/stimulate' },
    { label: 'Subscribe for future Triggers', link: '/subscribe-future-triggers' }
  ];

  const [activeMarket, setActiveMarket] = useState<string>('NYSE');

  return (
    <div className="py-2 bg-gray-50">
      <div className="w-full px-4 sm:px-6">
        {/* Strategy Section */}
        <div className="mt-4">
          <div className="flex items-between px-4 justify-center mb-6">
            {/* Left */}
            <div className="py-4 px-2 bg-white rounded-xl shadow-sm w-full mr-2 border">
              <div className="flex items-center mb-6">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <h4 className="ml-1 text-xl font-semibold text-gray-900">Build Your Strategy</h4>
              </div>
              <div className='flex items-start'>
                <div className='border w-full rounded-lg p-4 mx-2'>
                  <h4 className="font-semibold text-gray-900">Buy Criteria</h4>
                  <ul className="space-y-4 mt-3">
                    <li className="flex items-start">
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded' />
                      <span className='text-sm ml-2'>N-Day Moving Avg. &gt; Last Open</span>
                    </li>
                    <li className="flex items-start">
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded' />
                      <span className='text-sm ml-2'>Top X, N-Day Top Gainers</span>
                    </li>
                    <li className="flex items-start">
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded' />
                      <span className='text-sm ml-2'>Last-Close &gt; N-Day High</span>
                    </li>
                  </ul>
                </div>
                <div className='border w-full rounded-lg p-4 mx-2'>
                  <h4 className="font-semibold text-gray-900">Sell Criteria</h4>
                  <ul className="space-y-4 mt-3">
                    <li className="flex items-start">
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500' />
                      <span className='text-sm ml-2'>Target Profit: X%</span>
                    </li>
                    <li className="flex items-start">
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500' />
                      <span className='text-sm ml-2'>Stop Loss: Y%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border py-4 bg-white px-2 rounded-xl shadow-sm ml-2 w-full">
              <div className="flex items-center mb-6">
                <LineChart className="h-5 w-5 text-blue-600" />
                <h4 className="ml-3 text-xl font-semibold text-gray-900">Backtest Results</h4>
              </div>
              <ResponsiveContainer width={500} height={200}>
                <Linear data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="url(#colorGradient)"
                    strokeWidth={3}
                    dot={{ fill: "#8884d8", strokeWidth: 2, r: 5 }}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff6384" />
                      <stop offset="50%" stopColor="#36a2eb" />
                      <stop offset="100%" stopColor="#4bc0c0" />
                    </linearGradient>
                  </defs>
                </Linear>
              </ResponsiveContainer>
              <div className='grid grid-cols-2 mt-4 mx-4 px-4'>
                <div className='text-sm'>
                  Overall Returns:
                </div>
                <div className='text-green-500 text-sm text-end'>
                  +24%
                </div>
                <div className='text-sm'>
                  Weekly Win Rate:
                </div>
                <div className='text-gray-900 text-sm text-end'>
                  68%
                </div>
                <span className='text-sm'>
                  Max Drawdown:
                </span>
                <span className='text-red-500 text-sm text-end'>
                  -12.3%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End of Strategy Section */}

        {/* Global Market Section */}
        <div className='border bg-white rounded-md p-4 mx-3'>
          <div className='flex items-start'>
            <Earth className='w-5 h-5 mt-1 text-blue-600 mx-2' />
            <h4 className="font-semibold text-xl text-gray-900 text-md">Global Markets</h4>
          </div>
          <div className='grid grid-cols-4'>
            {globalMarkets.map((market, index) => (
              <div
                key={index}
                className={`border p-2 text-center rounded-lg m-2 cursor-pointer ${activeMarket === market.name ? 'bg-blue-200 text-blue-600' : 'bg-gray-50 text-gray-900'}`}
                onClick={() => setActiveMarket(market.name)}
              >
                <span className="text-sm">{market.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Section */}
        <div className='grid grid-cols-3 mt-4'>
          {features.map((feature, index) => (
            <div key={index} className='border p-2 bg-white rounded-lg m-2'>
              <span className='py-1 font-semibold px-3 bg-blue-200 text-blue-600 rounded-2xl mx-2 my-1'>{index + 1}</span>
              <Link to={feature.link} className="text-sm text-gray-900">{feature.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;