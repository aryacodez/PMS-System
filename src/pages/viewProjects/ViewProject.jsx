import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './view.scss'

import React from 'react'

const ViewProject = () => {
  return (
    <div className='views'>
        <Sidebar/>
        <div className='listContainer'>
            <Navbar/>
            View projects
        </div>
    </div>
  )
}

export default ViewProject