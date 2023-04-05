import React from 'react'
import './client.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Forms3 from '../../components/Forms/Forms3'

const Client = () => {
    
    return (
        <div className='client'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <Forms3/>
            </div>
        </div>
    )
}

export default Client
