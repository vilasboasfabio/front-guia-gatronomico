import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SideMenu = ({ onClose }) => {
    return (
        <div className="fixed z-40 inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <section className="absolute inset-y-0 right-0 pl-10 flex" aria-labelledby="slide-over-heading">
                    <div className="relative w-screen max-w-md">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity" onClick={onClose}></div>

                        {/* Panel */}
                        <div className="relative flex flex-col h-full bg-white shadow-xl overflow-y-scroll">
                            <div className="flex-1 py-6 sm:px-6">
                                <div className=" -ml-6 flex w-100 items-start -mt-6 h-12 justify-between bg-lbronze ">
                                    <h2 className="text-lg ml-3 font-medium text-gray-50 mt-3" id="slide-over-heading ">
                                        Menu
                                    </h2>
                                    <div className="ml-3 h-7 flex items-center">
                                        <button
                                            className="bg-lbronze mt-3 -ml-12 rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
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
                                        <a href="/cadastros" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Cadastro de Restaurantes
                                        </a>
                                        <a href="/membros" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            {/* Icon */}
                                            Cadastro de Clientes
                                        </a>
                                    </nav>


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
