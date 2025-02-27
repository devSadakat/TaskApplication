const Nav = () => {
    return (
        <div>
            <div className="flex justify-between bg-gray-200 p-2 mt-6 rounded-xl shadow shadow-gray-400">
                <input className="bg-white h-8 rounded-2xl " placeholder=' O Search Projects' type="text" />
                <input className="bg-white h-8" placeholder='Filter' type="text" />
            </div>
        </div>
    );
};
export default Nav;