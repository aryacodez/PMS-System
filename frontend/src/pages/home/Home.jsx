import React from 'react';
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Features from '../../components/Features/Feat.jsx';
import Featured from '../../components/Featured/Featured.jsx';
import Chart from '../../components/Chart/Chart.jsx';


const Home = () => {
  return(
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <div className="features">
          <Features type='number'/>
          <Features type='issue'/>
          <Features type='warning'/>          
        </div>
        <div className='charts'>
          <Featured/>
          <Chart/>
        </div>
      </div>
    </div>
   );
};
export default Home;