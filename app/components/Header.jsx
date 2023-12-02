import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import SideMenu from './SideMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">

            <div className="block mb-0">
                <button
                    onClick={toggleMenu}
                    className="flex items-center rounded text-lbronze hover:text-white "
                >
                    <BiMenuAltLeft size={38} />
                </button>
            </div>
            <div className=" w-full block -mb-6 ml-lg flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md flex -ml-16 mt-2">
                    <a href="#responsive-header" className="block mt-10 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-16">
                        About
                    </a>
                    <a href="#responsive-header" className="block mt-10 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-6">
                        Menu
                    </a>
                    <div className=" items-center -mt-9 flex-no-shrink text-white mr-2">
                       <img src='/logo1.png' width={100} height={100} alt='logo' />
                    </div>
                    <a href="#responsive-header" className="block mt-10 lg:inline-block lg:mt-0 text-white hover:text-gray-500 ml-5">
                        Gallery
                    </a>
                    <a href="#responsive-header" className="block mt-10 lg:inline-block lg:mt-0 text-white hover:text-gray-500 ml-16">
                        Contact
                    </a>
                </div>
                <div className='n-mt'>
                    <a href="#responsive-header" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent text-lbronze hover:bg-white lg:mt-0 ml-72">
                        Cadastre-se
                    </a>
                </div>
            </div>
            {isMenuOpen && (
                <SideMenu onClose={toggleMenu} />
            )}
        </nav>
    );
};

export default Header;
