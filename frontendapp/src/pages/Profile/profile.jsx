import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.scss'
import Account from '../../components/account/account'
const Profile = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='users'>
                <Account />
            </div>
        </div>
    )
}

export default Profile