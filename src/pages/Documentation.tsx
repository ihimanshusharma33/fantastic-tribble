import React from 'react';
import { Book, Code, Terminal, FileText } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Documentation</h1>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about using Trading Studio
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <Book className="h-6 w-6 text-blue-500" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Getting Started</h2>
              </div>
              <div className="mt-4 space-y-4">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Introduction to Option Trading Studio</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Creating Your First Strategy</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Understanding the Dashboard</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <Code className="h-6 w-6 text-blue-500" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">API Reference</h2>
              </div>
              <div className="mt-4 space-y-4">
                <a href="#" className="block text-gray-600 hover:text-blue-500">REST API Documentation</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">WebSocket API</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Authentication</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <Terminal className="h-6 w-6 text-blue-500" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Advanced Topics</h2>
              </div>
              <div className="mt-4 space-y-4">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Custom Indicators</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Risk Management</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Backtesting Strategies</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-blue-500" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Tutorials</h2>
              </div>
              <div className="mt-4 space-y-4">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Video Tutorials</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Step-by-Step Guides</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Best Practices</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;