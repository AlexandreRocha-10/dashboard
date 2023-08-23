import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";

const Navbar = () => {
  return (
    <div id="dashboard" className="relative sm:flex justify-between items-center p-2">
        <h1 className="font-bold text-gray-300">Dashboard</h1>
        <div className="py-2">
            <TextInput icon={SearchIcon} placeholder="Search..."/>
        </div>
    </div>
  )
}

export default Navbar;
