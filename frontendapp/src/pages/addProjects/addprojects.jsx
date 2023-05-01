import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import Form3 from '../../components/forms/form3'
import 'bootstrap/dist/css/bootstrap.min.css';
import './addprojects.scss'

const AddProjects = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='projects'>
                <Form3 />
            </div>
        </div>
    )
}

export default AddProjects