import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './landing.scss'
import './landing.css'
import { useNavigate } from 'react-router-dom'


const Landing = () => {

    

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    return (
        <div className='project'>
            
            <div className='listContainer'>
                <Navbar />
                
                <div className='center'>

                    <h1>PMS-SYSTEM</h1>

                    <div className='downcenter'>

                        <button class="button-63" onClick={navigateToHome}>Button 63</button>
                    </div>    
                </div>
            </div>       
        </div>
    )
}

export default Landing
