import React from 'react'
import './featured.scss'
import Chart from "react-apexcharts";


const Featured = () => {

    const options={
        series:[30,15,45],
        labels:['Project Completed','Task Completed','Issues Pending'],
        colors:['#F97641','#2AECAB','#B5B1C6']
    };
    const series=[30,15,45];
    
  return (
    <div className="featured">
        <div className="top">
            <h2 className="heading">Progress</h2>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <Chart
                options={options}
                series={series}
                type='donut'
                width="130%"
                height={800}
                />
            </div>
        </div>
    </div>
  )
}

export default Featured;