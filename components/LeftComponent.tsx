import React from 'react';
import Image from 'next/image';

import NetIcon from './Icons/Net';
import LinkedinIcon from './Icons/Linkedin';
import FacebookIcon from './Icons/Facebook';
import InstagramIcon from './Icons/Instagram';

function LeftComponent() {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <div className="absolute m-5">
          <Image
            src="/exo_logo.png"
            alt="image"
            width={65}
            height={65}
            priority
          />
        </div>
        <div
          style={{ bottom: '35%' }}
          className="flex flex-col text-white absolute m-5 gap-3"
        >
          <h1 className="font-semibold text-4xl">100% Uptime😎</h1>
          <p className="text-gray-500 text-4xl">Zero Infrastructure</p>
          <p className="text-gray-500 text-4xl">Management</p>
        </div>

        <div
          style={{ bottom: 0 }}
          className="absolute text-gray-500 m-5 w-full flex justify-between items-center"
        >
          <div className="flex items-center w-full ">
            <NetIcon />
            <p className="text-sm p-1">aesthisia.com</p>
          </div>
          <div
            style={{ right: '10%' }}
            className="relative flex items-center gap-3 w-fit"
          >
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>

        <Image
          className="w-full h-full"
          src="/square_bg.png"
          alt="image"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
}

export default LeftComponent;
