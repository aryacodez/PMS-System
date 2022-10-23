import React from 'react';
import './add.scss';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

const Addproject = () => {
  return (
    <div className='project'>
        <Sidebar/>
        <div className='listContainer'>
            <Navbar/>
            add project
        </div>
    </div>
  )
}

export default Addproject