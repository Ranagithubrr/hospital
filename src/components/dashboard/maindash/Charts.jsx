import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {

    const data = {
        labels: ['10-25', '26-40','40+'],
        datasets: [
            {
                label: 'Pataients by age',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.6)',                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',                 
                ],
                borderWidth: 1,
            },
        ],
    };
    const dataTwo = {
        labels: ['Male', 'Famale', 'Others'],
        datasets: [
            {
                label: 'Pataients by age',
                data: [12, 9,1],
                backgroundColor: [
                    'rgba(129, 51, 180, 0.5)',
                    'rgba(233, 162, 35, 0.5)',
                    'rgba(255, 106, 186, 0.6)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <div>
        <h4 className=' text-gray-900 font-semibold'>Pataients by Age</h4>
        <div className='h-72 w-72 m-auto'>            
            <Pie data={data} />
        </div>
        <h4 className=' text-gray-900 font-semibold'>Pataients by Sex</h4>
        <div className='h-72 w-72 m-auto mt-5'>
            <Pie data={dataTwo} />
        </div>
    </div>
}

export default Charts
