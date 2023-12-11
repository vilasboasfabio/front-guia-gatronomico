'use client';

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CadastroMembros() {
    return (

        <div className="min-h-screen flex flex-col">
            {/* componentes da header */}
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />
            {/*titulo da header */}
            <div className="flex-1">
                <h1>Cadastro de Membros</h1>
            </div>
            
            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />
        </div>
    )
}

export default CadastroMembros