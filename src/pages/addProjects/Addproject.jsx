import React from 'react';
import './add.scss';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Forms from '../../components/Forms/Forms.jsx';

const Addproject = () => {
  return (
    <div className='project'>
        <Sidebar/>
        <div className='listContainer'>
            <Navbar/>
            <Forms/>
        </div>
    </div>
  )
}

export default Addproject