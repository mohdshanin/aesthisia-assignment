'use client'; // This is a client component 👈🏽
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Home(): JSX.Element {
  const router = useRouter();

  function logoutUser(): void {
    localStorage.clear();
    router.push('/');
  }

  useEffect(() => {
    const loggedInEmail = localStorage.getItem('emailData');

    if (!loggedInEmail) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-teal-600 font-extrabold text-4xl">
      <div>This is a home page</div>
      <button
        type="button"
        className="btn py-3 w-1/2 mt-4 px-auto text-white bg-black hover:bg-slate-900 text-lg font-semibold rounded-xl outline-none shadow-2xl shadow-stone-800"
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
