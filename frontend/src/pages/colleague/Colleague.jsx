import React from 'react'
import './colleague.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Forms1 from '../../components/Forms/Forms1'

const colleague = () => {
  return (
    <div className='colleague'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar />
        <Forms1/>
      </div>
    </div>
  )
}

export default colleague
