import React,{useState} from 'react'
import './featured.scss'
import Chart from "react-apexcharts";
import { useEffect } from 'react';


const Featured = () => {
    // const [table,setTable] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:4000/count/1', {
    //         method: 'GET'
    //     }).then((count)=>count.json())
    //     .then((count)=>setTable(count))
    // },[])

    // const tab = table;
    // var arr= tab.map(i=>`${i.count}`);    
    // var c= parseInt(arr[0])
    // console.log(c);
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
                width="140%"
                height={800}
                />
            </div>
        </div>
    </div>
  )
}

export default Featured;