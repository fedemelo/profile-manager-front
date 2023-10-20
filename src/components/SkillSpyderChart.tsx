import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Employee } from '../types';
import {
    ChartConfiguration,
    ChartData,
    RadialLinearScale,
    Chart,
    LineElement,
    PointElement,
} from 'chart.js';


// Copilot, fix the problem: "radialLinear" is not a registered scale.
Chart.register(RadialLinearScale, PointElement, LineElement);


const SkillSpiderChart: React.FC<{ employee: Employee }> = ({ employee }) => {
    const data: ChartData<'radar'> = {
        labels: employee.skills.map(skill => skill.name),
        datasets: [
            {
                label: 'Skill Level',
                data: employee.skills.map(skill => skill.level),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const config: ChartConfiguration<'radar'> = {
        type: 'radar',
        data: data,
        options: {
            scales: {
                r: {
                  ticks: {
                    stepSize: 1,
                    maxTicksLimit: 5,
                  },
                },
              },
            elements: {
                line: {
                    borderWidth: 3,
                },
            },
        },
    };

    return <Radar {...config} />;
};

export default SkillSpiderChart;