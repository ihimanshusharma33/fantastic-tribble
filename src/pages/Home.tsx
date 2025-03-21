import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { LineChart as Liner, Users, BookOpen } from "lucide-react";

const Home: React.FC = () => {
    const [data, setData] = useState<{ time: string; price: number }[]>([]);
    const [filter, setFilter] = useState('1Day');
    const [initialAmount, setInitialAmount] = useState(10000);
    const [growthRate, setGrowthRate] = useState(8);
    const [startDate, setStartDate] = useState("2025-01-01");
    const [endDate, setEndDate] = useState("2025-12-31");
    const [finalAmount, setFinalAmount] = useState(0);

    useEffect(() => {
        // Example stock price data (replace with API data)
        let newData: { time: string; price: number }[];
        switch (filter) {
            case '1Day':
                newData = [
                    { time: "10:00", price: 150 },
                    { time: "10:30", price: 155 },
                    { time: "11:00", price: 160 },
                    { time: "11:30", price: 157 },
                    { time: "12:00", price: 162 }
                ];
                break;
            case '1Week':
                newData = [
                    { time: "Mon", price: 150 },
                    { time: "Tue", price: 155 },
                    { time: "Wed", price: 160 },
                    { time: "Thu", price: 157 },
                    { time: "Fri", price: 162 }
                ];
                break;
            case '1Month':
                newData = [
                    { time: "Week 1", price: 150 },
                    { time: "Week 2", price: 155 },
                    { time: "Week 3", price: 160 },
                    { time: "Week 4", price: 157 }
                ];
                break;
            case '1Year':
                newData = [
                    { time: "Jan", price: 150 },
                    { time: "Feb", price: 155 },
                    { time: "Mar", price: 160 },
                    { time: "Apr", price: 157 },
                    { time: "May", price: 162 },
                    { time: "Jun", price: 165 },
                    { time: "Jul", price: 170 },
                    { time: "Aug", price: 175 },
                    { time: "Sep", price: 180 },
                    { time: "Oct", price: 185 },
                    { time: "Nov", price: 190 },
                    { time: "Dec", price: 195 }
                ];
                break;
            case '5Year':
                newData = [
                    { time: "2020", price: 150 },
                    { time: "2021", price: 155 },
                    { time: "2022", price: 160 },
                    { time: "2023", price: 157 },
                    { time: "2024", price: 162 }
                ];
                break;
            default:
                newData = [];
        }
        setData(newData);
    }, [filter]);

    useEffect(() => {
        const years = (new Date(endDate).getFullYear() - new Date(startDate).getFullYear());
        if (years > 0) {
            const finalValue = initialAmount * Math.pow(1 + growthRate / 100, years);
            setFinalAmount(parseFloat(finalValue.toFixed(2)));
        }
    }, [initialAmount, growthRate, startDate, endDate]);

    return (
        <div className='space-y-8 p-4  bg-white'>

            {/* First Segment */}
            <div className='flex justify-between mx-4  border-2'>
                {/* Filter Buttons */}
                <div className='flex justify-between flex-col items-center space-x-4'>
                    <div className='flex space-x-4'>
                        <select className='border p-2  w-fit  m-4 rounded-md' value={filter} onChange={(e) => setFilter(e.target.value)}>
                            {['1Day', '1Week', '1Month', '1Year', '5Year'].map((period) => (
                                <option key={period} value={period}>
                                    {period}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ResponsiveContainer width={500} height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="time" />
                            <YAxis domain={["auto", "auto"]} />
                            <Tooltip />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='m-auto p-8 '>
                    <div className='flex flex-col '>
                        <h1 className='text-xl font-semibold text-center'>Portfolio Performance</h1>
                        <div className="mt-4 space-y-2">
                            <p>Current: <span className="font-semibold ">5320$</span></p>
                            <p>Invested: <span className="font-semibold">4328$</span></p>
                            <p>Total returns: <span className="font-semibold text-red-500 ">-92$</span></p>
                            <p>1Day Return : <span className="font-semibold text-green-500">4$</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calculator Segment */}
            <div className="border-2 my-16 p-4 m-4 flex justify-center">
                <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full max-w-xl">
                    {/* Header */}
                    <div className="col-span-2">
                        <h1 className="text-2xl font-semibold text-center">Calculator</h1>
                    </div>

                    {/* Initial Investment */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Initial Investment:</label>
                        <input
                            type="number"
                            className="border p-2 w-full rounded-md"
                            value={initialAmount}
                            onChange={(e) => setInitialAmount(Number(e.target.value))}
                        />
                    </div>

                    {/* Growth Rate */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Growth Rate (%):</label>
                        <input
                            type="number"
                            className="border p-2 w-full rounded-md"
                            value={growthRate}
                            onChange={(e) => setGrowthRate(Number(e.target.value))}
                        />
                    </div>

                    {/* Start Date */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Start Date:</label>
                        <input
                            type="date"
                            className="border p-2 w-full rounded-md"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    {/* End Date */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">End Date:</label>
                        <input
                            type="date"
                            className="border p-2 w-full rounded-md"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    {/* Final Value */}
                    <div className="col-span-2 text-center">
                        <p className="text-md">
                            Final Value: <span className="font-semibold">${finalAmount}</span>
                        </p>
                    </div>
                </div>
            </div>


            <section className="text-center py-16 ">
                <h3 className="text-2xl font-bold">Features</h3>
                <p className="text-gray-600 mt-2">Everything you need to succeed in trading</p>

                <div className="grid md:grid-cols-3 gap-8 mt-8 px-10">
                    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
                        <Liner className="text-blue-600 w-10 h-10" />
                        <h4 className="mt-3 font-semibold">Advanced Analytics</h4>
                        <p className="text-gray-600 text-sm mt-2">Real-time market analysis and predictive modeling</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
                        <BookOpen className="text-blue-600 w-10 h-10" />
                        <h4 className="mt-3 font-semibold">Educational Resources</h4>
                        <p className="text-gray-600 text-sm mt-2">Comprehensive trading guides and tutorials</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
                        <Users className="text-blue-600 w-10 h-10" />
                        <h4 className="mt-3 font-semibold">Community Support</h4>
                        <p className="text-gray-600 text-sm mt-2">Connect with experienced traders</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;