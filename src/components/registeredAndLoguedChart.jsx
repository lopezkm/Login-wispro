import React from 'react';
import { useSelector } from 'react-redux';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.legend.position = 'bottom'

export default function LoguedChart() {

    const idLogin = useSelector(state => state.id);
    const logued = useSelector(state => state.logued);
    const registered = useSelector(state => state.registered);
    
    const daysRegistered = [];
    registered.forEach(user => { daysRegistered.push(user.date)});
    let daysAndQuantityRegistered = {};
    daysRegistered.forEach(day => {
        if(daysAndQuantityRegistered[day]) {
            daysAndQuantityRegistered[day] = (daysAndQuantityRegistered[day] + 1);
        } else {
            daysAndQuantityRegistered[day] = 1;
        }
    })
    
    const daysLogued = [];
    logued.forEach(user => { daysLogued.push(user.date)});
    let daysAndQuantityLogued = {};
    daysLogued.forEach(day => {
        if(daysAndQuantityLogued[day]) {
            daysAndQuantityLogued[day] = (daysAndQuantityLogued[day] + 1);
        } else {
            daysAndQuantityLogued[day] = 1;
        }
    })

    const allDays = [];
    daysLogued.forEach(date => {allDays.push(date)});
    daysRegistered.forEach(date => {allDays.push(date)});

    function uniqueDates(value, index, self) { 
        return self.indexOf(value) === index;
    }

    const uniqueDays = allDays.filter(uniqueDates);

    const quantityRegistered = Object.values(daysAndQuantityRegistered);
    const quantityLogued = Object.values(daysAndQuantityLogued);
    

    return (
        <div>
            {idLogin ? 
            <Bar
                data={{
                    labels: uniqueDays,
                    datasets: [
                        {
                            label: 'Usuarios Registrados',
                            data: quantityRegistered,
                            backgroundColor: 'rgba(0,0,255,0.5)',
                            borderColor: 'rgba(0,0,255,1)',
                            borderWidth: 3
                        },
                        {
                            label: 'Usuarios Loguedos',
                            data: quantityLogued,
                            backgroundColor: 'rgba(0,255,0,0.5)',
                            hoverBorderColor: 'rgba(0,255,0,1)',
                            borderWidth: 3,
                        }
                    ]
                }}       
                height={450}
                width={700}
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
                    title: {
                        display: true,
                        text: 'Usuarios Registrados y Logueados por dia',
                        fontSize: 25,
                    },
                    legend: {
                        labels: {
                            fontSize: 20,
                        }
                    },
                    layout: {
                        padding: {
                            top: 30,
                            left: 15,
                            right: 25,
                        }
                    }
                }}
            /> : null}
        </div>
    )
}