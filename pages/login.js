import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { funcLoginEmail, funcLoginGoogle } from '../config/firebase';
import { useRouter } from 'next/dist/client/router';

function Login() {
  const [typePass, setTypePass] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleTypePass = () => {
    if (typePass === 'password') {
      setTypePass('text');
    } else {
      setTypePass('password');
    }
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();
    funcLoginEmail(router, email, password);
  };

  const handleLoginGoogle = () => {
    funcLoginGoogle(router);
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex justify-center items-center h-screen">
        {/* Login Box */}
        <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
          {/* Title Box */}
          <h2 className="text-white font-robo font-bold text-4xl text-center mb-4">Login</h2>
          <form onSubmit={handleLoginEmail}>
            {/* Email Box */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Masukkan Email" className="py-1 px-3 mt-2 rounded outline-none shadow-md" />
            </div>
            {/* Password Box */}
            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              {/* Password Input Box */}
              <div className="w-64 mt-2 bg-gray-100 flex justify-between items-center rounded overflow-hidden">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={typePass} name="password" id="password" placeholder="Masukkan Password" className="py-1 px-3 outline-none w-56 shadow-md" />
                {typePass === 'password' ? <EyeIcon onClick={handleTypePass} className="w-5 h-5 mr-[6px] cursor-pointer" /> : <EyeOffIcon onClick={handleTypePass} className="w-5 h-5 mr-[6px] cursor-pointer" />}
              </div>
            </div>
            {/* Button Box */}
            <div className="mt-4 text-center">
              <button type="submit" className="bg-gray-200 rounded shadow-md transition-all duration-200 hover:bg-teal-900 hover:text-white w-full py-1 mt-4">
                Login
              </button>
              <div className="flex justify-around items-center mt-4 text-white">
                <Link href="/register">
                  <a className="cursor-pointer transition duration-300 ease-in hover:scale-105">Register</a>
                </Link>
                <Link href="/forgot-password">
                  <a className="cursor-pointer transition duration-300 ease-in hover:scale-105">Lupa Password</a>
                </Link>
              </div>
            </div>
          </form>
          {/* Button Google */}
          <button onClick={handleLoginGoogle} className="bg-gray-200 transition duration-200 hover:bg-gray-50 w-full mt-4 py-1 cursor-pointer flex justify-center items-center rounded shadow-md">
            <Image src="/img/google.svg" alt="google icon" width={18} height={18} /> <span className="ml-2">Continue With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
