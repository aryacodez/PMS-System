import React, { useState, useEffect } from 'react';

import './feat.scss'
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
const Feat = ({type}) => {  


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

    const [table2,setTable2]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/clientCount/1',{
            method:'GET'
        }).then((users)=>users.json())
        .then((users)=>setTable2(users))
    },[]);
    const clientCount=table2.count2;


    let res;    
    switch(type){
        case 'number':
            res={
                heading: "Total Projects",
                data:proCount,
                icon:<BeenhereRoundedIcon className='icon'/>
            };
            
            break;
        case 'issue':
            res={
                heading: "Total Clients",
                data:clientCount,
                icon:<PermIdentityRoundedIcon className='icon1'/>
            }
            break;
        case 'warning':
            res={
                heading: "Pending Issues",
                data:taskCount,
                icon:<PendingActionsRoundedIcon className='icon2'/>
            }
            break;
        default:
            break;
    }
  return (
    <div className="feat">        
        <div className='left'>
            <div className='iconic'>{res.icon}</div>            
            <span className='heading'>{res.heading}</span>          
            <span className='proleft'>{res.data}</span>
        </div>
        
    </div>
  )
}

export default Feat;