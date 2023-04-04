import React,{useState,useEffect} from 'react'
import './featured.scss'
import Chart from "react-apexcharts";



const Featured = () => {
    
    const [table,setTable]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/count/1',{
            method:'GET'
        }).then((users)=>users.json())
        .then((users)=>setTable(users))
    },[]);
    const proCount= (table.count);

    const [table1,setTable1]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/taskCount/1',{
            method:'GET'
        }).then((users)=>users.json())
        .then((users)=>setTable1(users))
    },[]);
    const taskCount=table1.count1;




    const options={
        series:[proCount,taskCount],
        labels:['Total Project','Issues Pending'],
        colors:['#3F51B5','#1890FF']
    };
    const series=[proCount,taskCount];
    
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