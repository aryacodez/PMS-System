import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './view.scss'
import Views from '../../components/Views/ViewTsk'
const viewTask = () => {
    return (
        <div className='views'>
            <Sidebar/>
            <div className='listContainer'>
                <Navbar/>
                <Views/>
            </div>
        </div>
      )
}

export default viewTask
