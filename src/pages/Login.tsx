import LoginForm from '../components/LoginForm';

import { FaBitcoin } from 'react-icons/fa';


const Login = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center'>
        <LoginForm />
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        <FaBitcoin className='w-60 h-60 bg-gradient-to-tr from-yellow-200 to-yellow-700 rounded-full animate-bounce'/>
        <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
      </div>
    </div>
    
  )
}

export default Login;