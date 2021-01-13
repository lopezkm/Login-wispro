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
    let daysAndQuantityRegistered = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 
    8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:0, 17:0, 18:0, 19:0, 
    20:0, 21:0, 22:0, 23:0, 24:0, 25:0, 26:0, 27:0, 28:0, 29:0, 30:0, 31:0};
    daysRegistered.forEach(day => {
        daysAndQuantityRegistered[day] = (daysAndQuantityRegistered[day] + 1);
        /* if(daysAndQuantityRegistered[day]) {
            daysAndQuantityRegistered[day] = (daysAndQuantityRegistered[day] + 1);
        } else {
            daysAndQuantityRegistered[day] = 1;
        } */
    })
    
    const daysLogued = [];
    logued.forEach(user => { daysLogued.push(user.date)});
    let daysAndQuantityLogued = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 
    8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:0, 17:0, 18:0, 19:0, 
    20:0, 21:0, 22:0, 23:0, 24:0, 25:0, 26:0, 27:0, 28:0, 29:0, 30:0, 31:0};
    daysLogued.forEach(day => {
        daysAndQuantityLogued[day] = (daysAndQuantityLogued[day] + 1);
        /* if(daysAndQuantityLogued[day]) {
            daysAndQuantityLogued[day] = (daysAndQuantityLogued[day] + 1);
        } else {
            daysAndQuantityLogued[day] = 1;
        } */
    })

    /* const allDays = [];
    daysLogued.forEach(date => {allDays.push(date)});
    daysRegistered.forEach(date => {allDays.push(date)});

    function uniqueDates(value, index, self) { 
        return self.indexOf(value) === index;
    }

    const days = allDays.filter(uniqueDates); */

    const days = [1, 2, 3, 4, 5, 6, 7, 
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const quantityRegistered = Object.values(daysAndQuantityRegistered);
    const quantityLogued = Object.values(daysAndQuantityLogued);
    

    return (
        <div>
            {idLogin ? 
            <Bar
                data={{
                    labels: days,
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
                        text: 'Enero - Usuarios Registrados y Logueados por dia',
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