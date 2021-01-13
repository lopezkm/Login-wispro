import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export default function LoguedChart() {

    return (
        <div>
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                
                    datasets: [
                        {
                            label: '# of votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            borderColor: ['Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red'],
                            borderWidth: 5
                        },
                        {
                            label: 'Quantity',
                            data: [15, 25, 10, 2, 5, 7],
                            backgroundColor: 'Orange',
                            hoverBorderColor: 'Red',
                            borderWidth: 5,
                        }
                    ]
                }}       
                height={400}
                width={600}
                options={{ 
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                }
                            }
                        ]
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        }
                    }
                }}
            />
        </div>
    )
}