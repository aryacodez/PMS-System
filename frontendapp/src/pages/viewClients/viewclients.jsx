import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import View4 from '../../components/Views/view4'
import 'bootstrap/dist/css/bootstrap.min.css';
import './viewclients.scss'

const ViewClients = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='vc'>
                <View4 />
            </div>
        </div>
    )
}

export default ViewClients