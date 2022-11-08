import React, { useState } from 'react';
import './sidebar.scss';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [isDropdownActive, setDropdownActive] = useState("false");
  const [isDropdownActive1, setDropdownActive1] = useState("false");
  const [isDropdownActive2, setDropdownActive2] = useState("false");
  const [isDropdownActive3, setDropdownActive3] = useState("false");

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
        <img src="https://i.ibb.co/rv4yMyB/prodesk-logo.png" alt="prodesk-logo" border="0" width="35" height="35"/>
          <span className="logo">ProDesk</span>
        </Link>        
      </div>
      <hr style={{
        height:'0.5px',
        border:'0',
        background: 'lightgray'
      }}/>
      <div className="center">
        <ul>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className='align'>
              <DashboardCustomizeRoundedIcon className='icon' />
              <span className='header'>Dashboard</span>
            </li>
          </Link>
          <li onClick={() => setDropdownActive(!isDropdownActive)} className='align'>
            <AccountTreeRoundedIcon className='icon' />
            <span className='header'>Projects <ArrowDropDownRoundedIcon className='icon1' /></span>
            <ul className={isDropdownActive ? "list-unstyled collapse" : "list-unstyled"}>
              <Link to="/project" style={{ textDecoration: "none" }}>
                <li className='sub'>
                  <span>Add Projects</span>
                </li>
              </Link>
              <Link to="/project/viewProject" style={{ textDecoration: "none" }}>
                <li className='sub1'>
                  <span>View Projects</span>
                </li>
              </Link>
            </ul>
          </li>
          <li onClick={() => setDropdownActive1(!isDropdownActive1)} className='align'>
            <AddTaskRoundedIcon className='icon' />
            <span className='header'>Work <ArrowDropDownRoundedIcon className='icon1' /></span>
            <ul className={isDropdownActive1 ? "list-unstyled collapse" : "list-unstyled"}>
              <Link to="/task" style={{ textDecoration: "none" }}>
                <li className='sub2'>
                  <span>Add Tasks</span>
                </li>
              </Link>
              <Link to="/task/viewTask" style={{ textDecoration: "none" }}>
                <li className='sub7'>
                  <span>View Tasks</span>
                </li>
              </Link>
            </ul>
          </li>
          <li onClick={() => setDropdownActive2(!isDropdownActive2)} className='align'>
            <Groups2RoundedIcon className='icon' />
            <span className='header'>Colleague <ArrowDropDownRoundedIcon className='icon1' /></span>
            <ul className={isDropdownActive2 ? "list-unstyled collapse" : "list-unstyled"}>
              <Link to="/members" style={{ textDecoration: "none" }}>
                <li className='sub3'>
                  <span>Add Colleague</span>
                </li>
              </Link>
              <Link to="/members/viewmembers" style={{ textDecoration: "none" }}>
                <li className='sub4'>
                  <span>View Colleague</span>
                </li>
              </Link>
            </ul>
          </li>
          <li onClick={() => setDropdownActive3(!isDropdownActive3)} className='align'>
            <Person2RoundedIcon className='icon' />
            <span className='header'>Client <ArrowDropDownRoundedIcon className='icon1' /></span>
            <ul className={isDropdownActive3 ? "list-unstyled collapse" : "list-unstyled"}>
              <Link to="/client" style={{ textDecoration: "none" }}>
                <li className='sub5'>
                  <span>Add Clients</span>
                </li>
              </Link>
              <Link to="/client/viewclient" style={{ textDecoration: "none" }}>
                <li className='sub6'>
                  <span>View Clients</span>
                </li>
              </Link>
            </ul>
          </li>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li className='align'>
              <PortraitRoundedIcon className='icon' />
              <span className='header'>Profile</span>
            </li>
          </Link>
          <div className='out'>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className='logout'>
                <LogoutRoundedIcon className='icon' />
                <span className='header'>Logout</span>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar;