import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignIn = () => {
        if (!isValidEmail(email) || password.length < 6) {
            alert('Please enter a valid email and password with at least 6 characters.');
        } else {
            navigate('/dashboard');
        }
    };

    const isValidEmail = (email: string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2">
      <h1 className="text-5xl font-semibold">TrybeWallet</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-8">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="mt-8 flex justify-between items-center mx-2">
          <div>
            <input
              type="checkbox"
              id="remember"
              className="ml-2 font-medium text-base"
            />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>
          <button className="font-medium text-base text-[#1e293b]">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
                <button
                    onClick={handleSignIn}
                    className="active:scale-[.95] active:duration-75 hover:scale-[1.05] transition-all py-3 rounded-xl bg-[#1e293b] text-white text-lg font-bold">
                    Sign in
                </button>
                <button
                    onClick={handleSignIn}
                    className="active:scale-[.95] active:duration-75 hover:scale-[1.05] transition-all flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium text-lg bg-red-600 text-white"
                >
                    <FaGoogle size={25} />
                    Sign in with Google
                </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
