import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import Form6 from '../../components/forms/form6'
import 'bootstrap/dist/css/bootstrap.min.css';
import './addclients.scss'

const AddClients = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='clients'>
                <Form6 />
            </div>
        </div>
    )
}

export default AddClients