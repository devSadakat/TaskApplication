
const CompletedTask = () => {
    return (
        <div className="mt-10 ml-10 bg-gray-200 p-4 rounded-2xl">
        <h4 className="text-center"> . Done <span className="bg-gray-300 rounded px-1">{"3"}</span></h4>
        <hr className="text-emerald-400 w-56 mx-auto" />
      
        <div className=" bg-white px-10 rounded-lg mt-4 shadow shadow-gray-400 w-72 p-2">
            <div className="flex justify-between">
                <button className="bg-red-100 text-red-400 text-sm px-1 rounded">Low</button>
                <button className="">...</button>
            </div>
            <p>Expaired Task</p>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur </p>
            <p className="pt-4">Deadeline 12/5/24</p>
        </div>
        <div className=" bg-white px-10 rounded-lg mt-4 shadow shadow-gray-400 w-72 p-2">
            <div className="flex justify-between">
                <button className="bg-red-100 text-red-400 text-sm px-1 rounded">Low</button>
                <button className="">...</button>
            </div>
            <p>Expaired Task</p>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur </p>
            <p className="pt-4">Deadeline 12/5/24</p>
        </div>
    </div>
    );
};

export default CompletedTask;