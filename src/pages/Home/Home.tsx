import CompletedTask from "../../components/Completed/CompletedTask";
import OnProcess from "../../components/OnProcess/OnProcess";
import ToDo from "../../components/ToDo/ToDo";


const Home = () => {
    return (
        <div className="flex gap-8">
            <ToDo />
            <OnProcess />
            <CompletedTask />
        </div>
    );
};

export default Home;