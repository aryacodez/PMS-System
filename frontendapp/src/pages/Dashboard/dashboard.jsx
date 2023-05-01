import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import Dash from '../../components/dash/dash'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.scss'
const Dashboard = () => {
  return (
  
      <div className='main-container d-flex' id='page-one'>
        <Sidebar />
        <div className='admin'>
          <Dash />
        </div>
      </div>
    
  )
}

export default Dashboard