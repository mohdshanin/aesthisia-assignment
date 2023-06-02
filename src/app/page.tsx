'use client'; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LeftComponent from '../../components/LeftComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEye, faEyeSlash);

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passVisible, togglePassVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isEmail: RegExpMatchArray | null = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    const isValidPass: RegExpMatchArray | null = String(password)
      .toLowerCase()
      .match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    if (email === '') {
      return setErrorMessage('Please enter your e-mail address.');
    }
    if (!isEmail) {
      return setErrorMessage('Please enter a valid e-mail address.');
    }
    if (password === '') {
      return setErrorMessage('Please enter your password.');
    }
    if (!isValidPass) {
      return setErrorMessage(
        'Minimum eight characters, at least one letter, one number and one special character'
      );
    }

    const loggedInEmail = localStorage.getItem('emailData');
    const loggedInPass = localStorage.getItem('passData');

    if (loggedInEmail !== email) {
      return setErrorMessage('User not found, Please Sign Up first.');
    }
    if (loggedInPass !== password) {
      return setErrorMessage(
        'Password is incorrect, Click on forgot password.'
      );
    }
    if (loggedInEmail === email && loggedInPass === password) {
      router.push('/home');
    }
  };

  useEffect(() => {
    if (errorMessage) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setErrorMessage('');
      }, 5000);
    }
  }, [errorMessage]);

  return (
    <div className="flex items-center justify-evenly w-full h-screen">
      <div className="w-1/2 m-5 overflow-hidden rounded-3xl">
        <LeftComponent />
      </div>
      <div className=" w-1/2 m-5">
        <div className="m-auto text-center w-1/2">
          <Image
            className="m-auto"
            src="/petals.png"
            alt="image"
            width={60}
            height={60}
            priority
          />
          <div className="flex justify-center gap-3">
            <h1 className="font-semibold text-4xl">Welcome</h1>
            <h1 className="font-semibold text-4xl text-teal-500">Back!</h1>
          </div>
          <p className="text-gray-500 my-1"> Glad to see you, Again!</p>
          <form
            className="flex flex-col gap-5 mt-8"
            onSubmit={onSubmit}
            noValidate
          >
            <input
              aria-label="Email address"
              name="email"
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="p-3 px-4 border-2 border-solid border-gray-400 rounded-xl placeholder-gray-400 outline-none"
              placeholder="Enter your email"
            />
            <div className="relative">
              <input
                aria-label="Password"
                name="password"
                type={passVisible ? 'text' : 'password'}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full p-3 px-4 border-2 border-solid border-gray-400 rounded-xl placeholder-gray-400 outline-none"
                placeholder="Enter your password"
              />
              <span className="absolute bottom-9 right-3 cursor-pointer text-gray-400 hover:text-gray-500">
                {
                  <FontAwesomeIcon
                    icon={passVisible ? faEyeSlash : faEye}
                    onClick={() => togglePassVisible((prev: boolean) => !prev)}
                  />
                }
              </span>
              <div className="w-full text-right mt-">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-500 text-xs"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            {showMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="btn py-3 mt-4 px-auto text-white bg-black hover:bg-slate-900 text-lg font-semibold rounded-xl outline-none shadow-2xl shadow-stone-800"
            >
              Log In
            </button>
          </form>
          <div className="text-sm text-gray-500 mt-16">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-teal-500 hover:text-teal-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
