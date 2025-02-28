import '../App.css'
import { Outlet } from 'react-router';
import Nav from '../components/Nav/Nav';
import AllTask from '../components/Nav/AllTask/AllTask';

const MainLayout = () => {
    return (
        <div className='mx-4'>
            <Nav></Nav>
           <div className='flex'>
           <AllTask/>
           <Outlet />
           </div>
        </div>
    );
};

export default MainLayout;