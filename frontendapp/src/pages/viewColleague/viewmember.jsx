import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import View6 from '../../components/Views/view6'
import 'bootstrap/dist/css/bootstrap.min.css';
import './viewmember.scss'

const ViewMember = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='vc'>
                <View6 />
            </div>
        </div>
    )
}

export default ViewMember