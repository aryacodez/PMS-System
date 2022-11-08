import Landing from './pages/landingPage/Landing.jsx'
import Home from './pages/home/Home.jsx'
import AddProjects from './pages/addProjects/Addproject.jsx'
import ViewProjects from './pages/viewProjects/ViewProject.jsx'
import Colleague from './pages/colleague/Colleague.jsx'
import ViewColleague from './pages/viewColleagues/viewColleague.jsx'
import Client from './pages/client/Client.jsx'
import ViewClient from './pages/viewClient/viewClient.jsx'
import AddTask from './pages/addTask/AddTask.jsx'
import ViewTask from './pages/viewTask/ViewTask'

import Profile from './pages/Profile/Profile.jsx'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/project' element={<AddProjects />} />
        <Route exact path='/project/viewProject' element={<ViewProjects />} />
        <Route exact path='/members' element={<Colleague />} />
        <Route exact path='/members/viewmembers' element={<ViewColleague />} />
        <Route exact path='/client' element={<Client />} />
        <Route exact path='/client/viewclient' element={<ViewClient />} />
        <Route exact path='/task' element={<AddTask />} />
        <Route exact path='/task/viewtask' element={<ViewTask />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </>
  );

}

  export default App;
