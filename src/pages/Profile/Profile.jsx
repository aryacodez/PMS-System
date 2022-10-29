import './profile.scss'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import User from '../../components/User/User.jsx';

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <div className="profileContainer">
        <Navbar/>
        <User/>
      </div>
    </div>
  )
}

export default Profile