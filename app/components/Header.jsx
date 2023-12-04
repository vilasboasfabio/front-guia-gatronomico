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
                <div className="text-md w-full flex -ml-16 -mt-9">
                    <a href="/sobresite" className="block w-32 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-16">
                        Elite Chefs
                    </a>
                    <a href="/sobrenos" className="block mt-7 w-28 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-6">
                        Sobre nós
                    </a>
                    <a href='/'>
                    <div className=" items-center -mt-6 flex-no-shrink text-white mr-2">
                       <img src='/logo1.png' width={112} height={112} alt='logo' />
                    </div>
                    </a>
                    <a href="/cadastros" className="block mt-7 lg:inline-block lg:mt-0 text-white hover:text-gray-500 ml-5">
                        Restaurantes
                    </a>
                    <a href="/contato" className="block mt-7 lg:inline-block lg:mt-0 text-white hover:text-gray-500 ml-16">
                        Contato
                    </a>
                </div>
                <div className='n-mt'>
                    <a href="/cadastromembros" className="inline-block w-36 lg:pl-7 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent text-lbronze hover:bg-white lg:-mt-6 ml-52">
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
