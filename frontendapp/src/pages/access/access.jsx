import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import Permission from '../../components/permission/permission'
import 'bootstrap/dist/css/bootstrap.min.css';
import './access.scss'

const Access = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='clients'>
                <Permission />
            </div>
        </div>
    )
}

export default Access