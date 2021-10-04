import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import { funcResetPassword } from '../config/firebase';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleResetPassword = (e) => {
    e.preventDefault();
    funcResetPassword(router, email);
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex justify-center items-center h-screen">
        {/* Login Box */}
        <div className="bg-teal-600 p-6 rounded-lg shadow-lg">
          {/* Title Box */}
          <h2 className="text-white font-robo font-bold text-4xl text-center mb-4">Ubah Password</h2>
          <form onSubmit={handleResetPassword}>
            {/* Email Box */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Masukkan Email" className="py-1 px-3 mt-2 rounded outline-none shadow-md" />
            </div>
            {/* Button Box */}
            <div className="mt-4 text-center">
              <button type="submit" className="bg-gray-200 rounded shadow-md transition-all duration-200 hover:bg-teal-900 hover:text-white w-full py-1 mt-4">
                Kirim email ubah password
              </button>
              <div className="flex justify-around items-center mt-4 text-white">
                <Link href="/login">
                  <a className="cursor-pointer transition duration-300 ease-in hover:scale-105">Login</a>
                </Link>
                <Link href="/register">
                  <a className="cursor-pointer transition duration-300 ease-in hover:scale-105">Register</a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
