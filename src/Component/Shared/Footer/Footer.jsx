'use client';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="!px-4 w-full !my-10 ">
      <div className="max-w-full mx-auto flex flex-col items-center gap-4 border !p-5">
        {/* Copyright Text */}
        <div className="text-center text-sm text-gray-800">
          <p>
            Copyright ©{' '}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              VELK.AGENT.LIST
            </a>{' '}
            | Powered by{' '}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              MAHI-HASAN
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className=" text-white !p-2 rounded-full " aria-label="Facebook">
            <FaFacebook color="#3b5998" size={20} />
          </a>
          <a href="#" className=" text-white !p-2 rounded-full " aria-label="YouTube">
            <FaYoutube color="#FF0000" size={20} />
          </a>
          <a href="#" className="  text-white !p-2 rounded-full " aria-label="X (Twitter)">
            <FaXTwitter color="#1DA1F2" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
