
import { Outlet } from 'react-router';
import Nav from '../components/Nav/Nav';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet/>
        </div>
    );
};

export default MainLayout;