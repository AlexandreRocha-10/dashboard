import { ChartBarIcon, DocumentIcon, HomeIcon, CreditCardIcon, BellIcon, ArrowUpIcon, MailIcon, ExternalLinkIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className=" bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div className="h-20 items-center flex">
        <HomeIcon width={40} className="text-gray-300 left-3 sm:left-6 fixed" />
      </div>
      <div className="left-3 sm:left-6 fixed top-[100px]">
        <ChartBarIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" />
        <a href="newexpense"><DocumentIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" /></a>
        <MailIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" />
        <CreditCardIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" />
        <BellIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" />
      </div>
      <div  className="text-gray-300 bottom-4 left-3 sm:left-6 fixed" >
        <a href="dashboard"><ArrowUpIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" /></a>
        <ExternalLinkIcon width={40} className="p-2 bg-gray-600 rounded-lg text-gray-300 mb-4" />
      </div>
    </div>
  ) 
}

export default Sidebar;
