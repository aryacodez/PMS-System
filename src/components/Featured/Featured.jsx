import React,{useState} from 'react'
import './featured.scss'
import Chart from "react-apexcharts";
import { useEffect } from 'react';


const Featured = () => {
    // const [chart,setChart]=useState({});
    // const charts=()=>{
    //     let count=[];
    // }
    const options={
        series:[30,15,45],
        labels:['Project Completed','Task Completed','Issues Pending'],
        colors:['#3F51B5','#2AECAB','#1890FF']
    };
    const series=[30,15,45];
    
  return (
    <div className="featured">
        <div className="top">
            <h4 className="heading">Progress</h4>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <Chart
                options={options}
                series={series}
                type='donut'
                width="140%"
                height={800}
                />
            </div>
        </div>
    </div>
  )
}

export default Featured;