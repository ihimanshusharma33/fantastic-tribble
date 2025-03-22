import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Stimulate from './pages/Stimulate';
import PortfolioConfig from './pages/PortfolioManage';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const CreateStrategy = React.lazy(() => import('./pages/CreateStrategy'));
const History = React.lazy(() => import('./pages/History'));
const Features = React.lazy(() => import('./pages/Features'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home=React.lazy(()=>import('./pages/Home'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-6">
            <React.Suspense fallback={
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateStrategy />} />
                <Route path="/history" element={<History />} />
                <Route path="/features" element={<Features />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/stimulate' element={<Stimulate />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/portfolioconfig" element={<PortfolioConfig />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </React.Suspense>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;