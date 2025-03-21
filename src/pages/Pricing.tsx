import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const initialPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Basic analytics',
        'Up to 5 projects',
        'Community support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For growing businesses',
      features: [
        'Advanced analytics',
        'Up to 20 projects',
        'Priority support',
        'Custom domains'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Business',
      price: '$99',
      description: 'For larger teams',
      features: [
        'Enterprise analytics',
        'Unlimited projects',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      highlighted: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For organizations',
      features: [
        'Custom solutions',
        'Dedicated support team',
        'Custom contracts',
        'On-premise options',
        'Advanced security'
      ],
      cta: 'Talk to Sales',
      highlighted: false
    }
  ];

  const [plans, setPlans] = useState(initialPlans);

  function activePlan(selectedPlan: any) {
    const updatedPlans = plans.map(plan => ({
      ...plan,
      highlighted: plan.name === selectedPlan.name
    }));
    setPlans(updatedPlans);
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              onClick={() => activePlan(plan)}
              key={index}
              className={`rounded-lg shadow-sm divide-y divide-gray-200 ${
                plan.highlighted
                  ? 'border-2 border-blue-500 relative'
                  : 'border border-gray-200'
              }`}
            >
              <div className="p-6 bg-white rounded-t-lg">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <button
                  className={`mt-8 block w-fit  rounded-md px-4 py-2 text-sm font-semibold text-center ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {plan.cta}
                </button>
                
              </div>
              <div className="px-6 pt-6 pb-8 bg-white rounded-b-lg">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            Have questions? <a href="/contact" className="text-blue-600 hover:text-blue-500">Check our FAQ</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;