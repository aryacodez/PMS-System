import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import View3 from '../../components/Views/view3'
import 'bootstrap/dist/css/bootstrap.min.css';
import './viewtasks.scss'

const ViewTasks = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='vt'>
                <View3 />
            </div>
        </div>
    )
}

export default ViewTasks