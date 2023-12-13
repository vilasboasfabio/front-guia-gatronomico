import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SideMenu = ({ onClose }) => {
    return (
        <div className="fixed w-screen z-40 inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <section className="absolute inset-y-0 right-0 pl-10 flex" aria-labelledby="slide-over-heading">
                    <div className="relative w-screen max-w-md">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity" onClick={onClose}></div>

                        {/* Panel */}
                        <div className="relative flex flex-col h-full bg-white shadow-xl overflow-y-scroll">
                            <div className="flex-1 py-6 sm:px-6">
                                <div className=" -ml-6 flex items-start pb-2 -mt-6 h-14 bg-lbronze ">
                                    <h2 className="text-lg -ml-20 font-medium text-gray-50 mt-3" >
                                        Menu
                                    </h2>
                                    <div className="-ml-28 mb-2 h-7 flex items-center">
                                        <button
                                            className="bg-lbronze mt-3 rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
                                            onClick={onClose}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="mt-8">
                                    <nav className="flex flex-col space-y-1">
                                        <a href="/" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Home
                                        </a>
                                        {/* Add more nav links here */}
                                        <a href="/sobresite" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Nosso Conceito
                                        </a>
                                        <a href="/loginpaginacadastro" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Cadastro de Restaurantes
                                        </a>
                                        <a href="/logincadastromembros" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Cadastro de Clientes
                                        </a>
                                        <a href="/sobrenos" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Sobre Nós
                                        </a>
                                        <a href="/contato" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Contato
                                        </a>
                                    </nav>
                                    <div className='ml-3 mt-6'>
                                        <a href="/contatoparacadastro" className="inline-block w-36 h-8 pt-2 lg:pl-7 text-sm mx-auto leading-none border rounded border-dbronze px-6 hover:border-transparent text-white bg-lbronze pb-2 hover:bg-white">
                                            Cadastre-se
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SideMenu;
