import Signup from "./pages/Signup/signup";
import Signin from "./pages/Signin/signin";

import Dashboard from "./pages/Dashboard/dashboard";
import AddProjects from "./pages/addProjects/addprojects";
import AddTasks from "./pages/addTasks/addtasks";
import AddMembers from "./pages/addMembers/addmembers";
import AddClients from "./pages/addClients/addclients";

import ViewProjects from "./pages/viewProjects/viewprojects";
import ViewClients from "./pages/viewClients/viewclients";
import ViewTasks from "./pages/viewTasks/viewtasks";
import ViewMember from "./pages/viewColleague/viewmember";

import Access from "./pages/access/access";

import Profile from "./pages/Profile/profile";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/addprojects" element={<AddProjects />} />
        <Route exact path="/addtasks" element={<AddTasks />} />
        <Route exact path="/addmembers" element={<AddMembers />} />
        <Route exact path="/addclients" element={<AddClients />} />
        <Route exact path="/viewprojects" element={<ViewProjects />} />
        <Route exact path="/viewclients" element={<ViewClients />} />
        <Route exact path="/viewtasks" element={<ViewTasks />} />
        <Route exact path="/viewmembers" element={<ViewMember />} />
        <Route exact path="/permissions" element={<Access />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
