import './addtask.scss';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Forms2 from '../../components/Forms/Forms2.jsx';


const AddTask = () => {
  return (
    <div className='task'>
        <Sidebar/>
        <div className='listContainer'>
            <Navbar/>
            <Forms2/>           
        </div>
    </div>
  )
}

export default AddTask;
