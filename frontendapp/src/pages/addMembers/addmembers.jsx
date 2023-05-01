import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import Form5 from '../../components/forms/form5'
import 'bootstrap/dist/css/bootstrap.min.css';
import './addmembers.scss'

const AddMembers = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='members'>
                <Form5 />
            </div>
        </div>
    )
}

export default AddMembers