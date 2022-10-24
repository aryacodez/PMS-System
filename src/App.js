import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import AddProjects from './pages/addProjects/Addproject.jsx'
import ViewProjects from './pages/viewProjects/ViewProject.jsx'
import Colleague from './pages/colleague/Colleague.jsx'
import './index.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='project'>
            <Route index element={<AddProjects/>}/>
            <Route path='viewProject' element={<ViewProjects/>}/>
            </Route>
            <Route path='members'>
              <Route index element={<Colleague/>}/>
            </Route>
            
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
