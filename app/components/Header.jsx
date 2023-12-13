'use client';
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
        <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-4 lg:p-6">

            <div className="mb-0 ml-0 -mr-12">
                <button
                    onClick={toggleMenu}
                    className="rounded text-lbronze lg:hidden sm:block hover:text-white "
                >
                    
                    <BiMenuAltLeft size={38} />
                </button>
            </div>
            <div className="lg:hidden -mb-6 -mt-6 flex-no-shrink text-white mx-auto">
                     <a href='/'><img src='/logo1.png' width={112} height={112} alt='logo'/></a>
                    </div>
            <div className=" w-full block -mb-6 ml-lg  flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md w-full flex -ml-44 mt-3 resp-hid">
                    <a href="/sobresite" className="block w-32 mt-6 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-16">
                        Elite Chefs
                    </a>
                    <a href="/sobrenos" className="block mt-7 w-28 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-6">
                        Sobre nós
                    </a>
                    <a href='/'>
                    <div className=" items-center -mt-9 flex-no-shrink text-white mx-auto">
                       <img src='/logo1.png' width={112} height={112} alt='logo' className='mx-auto' />
                    </div>
                    </a>
                    <a href="/loginpaginacadastro" className="block mt-7 lg:inline-block lg:mt-0 text-white hover:text-gray-500 ml-9">
                        Restaurantes
                    </a>
                    <a href="/contato" className="block mt-7 lg:inline-block lg:mt-0 text-white hover:text-gray-500 ml-24">
                        Contato
                    </a>
                </div>
                <div className='n-mt text-center'>
                    <a href="/logincadastromembros" className="inline-block w-36 h-12 pt-2 resp-hid p-1 text-sm mx-auto leading-none border rounded text-white border-white hover:border-transparent text-lbronze hover:bg-white lg:block">
                        Cadastro de Membros
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