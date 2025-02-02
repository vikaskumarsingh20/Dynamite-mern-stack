/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, PureComponent } from "react";
import { dataBrushBar, dataGraph, dummyData } from "./data/data";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
    Cell,
    Legend,
    Brush,
    ReferenceLine,
} from "recharts";

const Dashboard = () => {
    const [data, setData] = useState([]);

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

    useEffect(() => {
        setData(dummyData);
    }, []);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2
            },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height
            } ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 light:bg-gray-900">
            <div className="w-full p-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-0">
                    Welcome to Admin Dashboard
                </h1>
                <div className="flex flex-wrap align-center justify-center">
                    {/* line-graph */}
                    <LineChart
                        width={1000}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    {/* color-graph */}
                    <BarChart
                        width={500}
                        height={300}
                        data={dataGraph}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar
                            dataKey="uv"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: "top" }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                    {/* slider-graph */}
                    <BarChart
                        width={500}
                        height={300}
                        data={dataBrushBar}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Brush dataKey="name" height={30} stroke="#8884d8" />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
