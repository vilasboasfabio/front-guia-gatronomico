'use client';

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Sobrenos() {
    return (
        <div className=" bg-slate-900 min-h-screen flex flex-col text-slate-200">
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />

            <div className="relative">
                <img className="w-full h-auto opacity-40" src="/equipechefs.jpg" alt="Equipe Chefs" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <p className="text-white text-lg font-bold">Sobre Nós</p>
                </div>
            </div>

            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />
        </div>
    )
}

export default Sobrenos