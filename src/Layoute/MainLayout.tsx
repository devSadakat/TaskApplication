import '../App.css'
import { Outlet } from 'react-router';
import Nav from '../components/Nav/Nav';

const MainLayout = () => {
    return (
        <div className='mx-4'>
            <Nav></Nav>
            <Outlet />
        </div>
    );
};

export default MainLayout;