import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './sidebar.scss';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
const Sidebar = () => {
  const [isDropdownActive,setDropdownActive] = useState("false");
  const [isDropdownActive1,setDropdownActive1] = useState("false");
  const [isDropdownActive2,setDropdownActive2] = useState("false");
  const [isDropdownActive3,setDropdownActive3] = useState("false");

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">PMS System</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardCustomizeRoundedIcon className='icon'/>
            <Link to='/' className='link'><span>Dashboard</span></Link>
          </li>          
          <li onClick={()=>setDropdownActive(!isDropdownActive)}>
            <AccountTreeRoundedIcon className='icon'/>
            <span>Projects <ArrowDropDownRoundedIcon className='icon1'/></span>
            <ul className={isDropdownActive?"list-unstyled collapse":"list-unstyled"}>
              <li className='sub'>
                <Link to='/project' className='link'><span>Add Projects</span></Link>
              </li>
              <li className='sub1'>
                <Link to='/project/viewProject' className='link'><span>View Projects</span></Link>
              </li>
            </ul>
          </li>
          <li onClick={()=>setDropdownActive1(!isDropdownActive1)}>
            <AddTaskRoundedIcon className='icon'/>
            <span>Work <ArrowDropDownRoundedIcon className='icon1'/></span>
            <ul className={isDropdownActive1?"list-unstyled collapse":"list-unstyled"}>
              <li className='sub2'>
                <span>Add Tasks</span>
              </li>
              <li className='sub7'>
                <span>View Tasks</span>
              </li>
            </ul>
          </li>
          <li onClick={()=>setDropdownActive2(!isDropdownActive2)}>
            <Groups2RoundedIcon className='icon'/>
            <span>Colleague <ArrowDropDownRoundedIcon className='icon1'/></span>
            <ul className={isDropdownActive2?"list-unstyled collapse":"list-unstyled"}>
              <li className='sub3'>
                <Link to='/members' className='link'><span>Add Colleague</span></Link>
              </li>
              <li className='sub4'>
                <Link to='/members/viewmembers' className='link'><span>View Colleague</span></Link>
              </li>
            </ul>
          </li>
          <li onClick={()=>setDropdownActive3(!isDropdownActive3)}>
            <Person2RoundedIcon className='icon'/>
            <span>Client <ArrowDropDownRoundedIcon className='icon1'/></span>
            <ul className={isDropdownActive3?"list-unstyled collapse":"list-unstyled"}>
              <li className='sub5'> 
                <Link to='/client' className='link'><span>Add Clients</span></Link>
              </li>
              <li className='sub6'>
                <Link to='/client/viewclient' className='link'><span>View Clients</span></Link>
              </li>
            </ul>
          </li>
          <li>
            <PortraitRoundedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>    
  )
}
export default Sidebar;