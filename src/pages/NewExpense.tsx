import LeftColumnExpense from '../components/LeftColumnExpense';
import Navbar from '../components/Navbar';
import RightColumn from '../components/RightColumn';
import Sidebar from '../components/Sidebar';


const NewExpense = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex flex-col flex-1 relative'>
        <Navbar />
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
            <LeftColumnExpense />
          </div>
          <div className='w-full'>
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  ) 
}

export default NewExpense;