import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import View from '../../components/Views/Viewclt'

const viewClient = () => {

    return (
        <div className='views'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <View />
            </div>
        </div>
    )
}

export default viewClient
