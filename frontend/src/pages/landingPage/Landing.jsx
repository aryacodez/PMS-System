import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './landing.scss'
import './landing.css'
import { useNavigate } from 'react-router-dom'


const Landing = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    }

    return (
        <div className='project'>
            <div className='listContainers'>
                <Navbar />
                <div className='centers'>
                    <div className="button-wrapper">
                        <h1 className='name'>ProDesk</h1>
                        <div className='button-align'>
                            <button type="button" className="button-63" onClick={navigateToHome}> Get Started </button>
                        </div>
                    </div>
                </div>
                 
            </div>       
        </div>
    )
}

export default Landing