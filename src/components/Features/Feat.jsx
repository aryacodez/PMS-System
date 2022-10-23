import React from 'react'
import './feat.scss'
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
const feat = ({type}) => {

    let res;    
    switch(type){
        case 'number':
            res={
                heading: "Total Projects",
                data:30,
                icon:<BeenhereRoundedIcon className='icon'/>
            }
            break;
        case 'issue':
            res={
                heading: "Task Completed",
                data:15,
                icon:<VerifiedRoundedIcon className='icon1'/>
            }
            break;
        case 'warning':
            res={
                heading: "Pending Issues",
                data:45,
                icon:<PendingActionsRoundedIcon className='icon2'/>
            }
            break;
        default:
            break;
    }
  return (
    <div className="feat">
        <div className='left'>
            {res.icon}
            <span className='proleft'>{res.data}</span>
            <span className='heading'>{res.heading}</span>          

        </div>
        
    </div>
  )
}

export default feat;