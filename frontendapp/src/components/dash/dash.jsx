import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Chart from "react-apexcharts";

import './dash.scss'
const Dash = () => {
    const [project, setProject] = useState("");
    const [client, setClient] = useState("");
    const [protaskcount, setProtaskcount] = useState("");
    useEffect(() => {
        //API -- 1
        fetch('/api/v1/getcounter', {
            method: "GET"
        }).then(res => res.json())
            .then((res) => {
                setProject(res.get[0].totalProject)
                setClient(res.get[0].totalClients)
            })

        //API--2
        fetch('/api/v1/get-task-size', {
            method: "GET"
        }).then(res => res.json())
            .then((res) => {
                setProtaskcount(res.projectsizes)
            })
    }, [])
    console.log(protaskcount[0])
    console.log(client)

    
    //console.log(Object.keys(protaskcount).map((key) => protaskcount[key].taskSize))
    const option = {
        series: [5, 2, 7],
        labels: ['Completed Tasks', 'Pending Issues', 'Unresolved Issues'],
        colors: ['#B3B3FF', '#33FF99', '#FF5C33'],

        fill: {
            type: 'gradient',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '13px',
                            fontWeight: 600
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            fontWeight: 700,
                        },
                        total: {
                            show: true,
                            fontSize: '16px',
                            fontWeight: 700,
                            label: 'Total Tasks'
                        }
                    }
                }
            }
        },
        legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'left',
            fontSize: '14px',
            fontWeight: 500,
            offsetX: -10,
            markers: {
                offsetX: -8
            },
            itemMargin: {
                horizontal: 10,
                vertical: 8
            },
        }
    };
    const series = [5, 2, 7];

    const series1 = [
        {
            name: "Tasks in Each Project",
            data: Object.keys(protaskcount).map((key) => protaskcount[key].taskSize)
        },
    ];

    const option1 = {
        chart: {
            id: 'tasks-bar',
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },
            offsetX:-40,            
        },
        yaxis:{
            labels: {
                rotate: -40,
                style:{
                    fontSize:"12px",
                    fontWeight: 500,
                }
            }
        },
        tooltip:{
            followCursor:true
        },
        theme: {
            mode: 'light', 
            palette: 'palette2', 
            monochrome: {
                enabled: true,
                color: '#03A9F4',
                shadeTo: 'light',
                shadeIntensity: 0.75
            },
        },
        plotOptions: {
            bar: {
                horizontal: true, //horizontal bar chart
            },
        },
        grid: {
            show: true,
            borderColor: '#250A39',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.2
            },  
            column: {
                colors: undefined,
                opacity: 0.9
            },  
            padding: {
                top: 10,
                right: -10,
                bottom: 0,
                left: -10
            },  
        },
        xaxis: {
            categories: Object.keys(protaskcount).map((key) => protaskcount[key].name)
        },
    }

    return (
        <>

            <div className="container-fluid px-4 overflow-hidden text-center " id='main'>
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-5 bg-white shadow-sm d-flex justify-content-start align-items-start rounded" id='inner-main'>
                            <div>
                                <p className='fs-4 pb-2 px-2 pt-1 mx-4 fw-bolder'>Total Projekts</p>
                                <h3 className='fs-2'>{project}</h3>
                            </div>
                            <span className='fs-2 pb-2 me-5 pt-5 d-flex justify-content-end align-items-end ml-auto'>
                                <i className="bi bi-check-circle "></i>
                            </span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-5 bg-white shadow-sm d-flex justify-content-start align-items-start rounded" id='inner-main'>
                            <div>
                                <p className='fs-4 pb-2 px-2 pt-1 mx-4 fw-bolder'>Total Clients</p>
                                <h3 className='fs-2'>{client}</h3>
                            </div>
                            <span className='fs-2 pb-2 me-5 pt-5 d-flex justify-content-end align-items-end ml-auto'>
                                <i className="bi bi-file-earmark-person-fill"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-5 bg-white shadow-sm d-flex justify-content-start align-items-start rounded" id='inner-main'>
                            <div>
                                <p className='fs-4 pb-2 px-2 pt-1 mx-4 fw-bolder'>Pending Issues</p>
                                <h3 className='fs-2'>5</h3>
                            </div>
                            <span className='fs-2 pb-2 me-5 pt-5 d-flex justify-content-end align-items-end ml-auto'>
                                <i className="bi bi-bug-fill"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container overflow-hidden text-center mt-5 me-1 ms-1'>
                <div className='row gx-4'>
                    <div className='col'>
                        <div class="p-5 bg-white shadow-sm d-flex justify-content-start align-items-start rounded" id='inner-main'>
                            <div className='pb-xxl-5'>
                                <h3 className='fs-4 fw-bolder text-start pb-xxl-4'>Tasks Status</h3>
                                <Chart
                                    options={option}
                                    series={series}
                                    type='donut'
                                    width='160%'
                                    height='auto'
                                    className='ms-xxl-5'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="p-5 bg-white shadow-sm d-flex justify-content-start align-items-start rounded" id='inner-main'>
                            <div className='pb-xxl-4'>
                                <h3 className='fs-4 fw-bolder text-start'>Projekt's Task Count</h3>
                                <Chart
                                    options={option1}
                                    series={series1}
                                    type='bar'
                                    width='160%'
                                    height='auto'
                                    className='ms-xxl-5'
                                />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dash