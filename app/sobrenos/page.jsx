'use client';

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Sobrenos(){
    return(
        <div className="min-h-screen flex flex-col">
             <Header/>
            <hr className='bg-lbronze h-2 -mt-1' />

            <div className="flex-1">
            <h1>Sobre Nós</h1>
            </div>
            
            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer/>
        </div>
    )
}

export default Sobrenos