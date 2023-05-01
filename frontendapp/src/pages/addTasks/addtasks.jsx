import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import Form4 from '../../components/forms/form4'
import 'bootstrap/dist/css/bootstrap.min.css';
import './addtasks.scss'

const AddTasks = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='tasks'>
                <Form4 />
            </div>
        </div>
    )
}

export default AddTasks