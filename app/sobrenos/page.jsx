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
                <img className="w-full h-auto opacity-50" src="/equipechefs.jpg" alt="Equipe Chefs" />
                <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
                    <p className="text-6xl font-bold mr-auto ml-36 mt-80 text-slate-300">Sobre Nós</p>
                    <p className="text-1xl mr-auto ml-36 mt-4 w-2/3 text-justify font-light">Se você é daqueles que consideram a experiência de saborear uma refeição como uma verdadeira celebração para os sentidos, então o Elite Chefs é o seu guia essencial. Embarque conosco em uma jornada sensorial através dos mais extraordinários restaurantes, onde cada prato conta uma história de inovação culinária e sabor autêntico.</p>
                </div>
            </div>
        


            <div>
                <p className="text-3xl mt-6 ml-36 font-bold">Conheça nossos diretores:</p>
            </div>


            <div className="">
                <div className="bg-slate-800 w-2/4 h-76 rounded-3xl mt-10 mb-6 border-bronze flex">
                    <img className="w-64 mt-6 ml-8 mb-2 rounded-lg drop-shadow-2xl  h-80" src="/eu.png" alt="foto Ana Clara " />
                    <div>
                    <p className="text-2xl font-bold ml-20 mb-2 mt-6">Ana Clara Cavalcante</p>
                    <p className="text-left font-bold ml-20 mb-2 mt-6">Sou Ana Clara Cavalcante Reis, natural de Valinhos, e atualmente conto com 17 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI. </p>
                    </div>
                   
                </div>


                <div className="bg-slate-800 w-2/4 h-76 rounded-3xl mt-10 mb-6 border-bronze flex">
                    <img className="w-64 mt-6 ml-8 mb-2 rounded-lg drop-shadow-2xl  h-80" src="/fabiocirculo.png" alt="foto fábio vilas boas " />
                    <div>
                    <p className="text-2xl font-bold ml-20 mb-2 mt-6">Fábio Vilas Boas</p>
                    <p className="text-left font-bold ml-20 mb-2 mt-6">Sou Fábio Vilas Boas Simões Junior, natural de Sorocaba, e atualmente conto com 16 anos de idade. Encontro-me matriculado no curso de Desenvolvimento de Sistemas no SENAI. </p>
                    </div>
                   
                </div>


                <div className="bg-slate-800 w-2/4 h-76 rounded-3xl mt-10 mb-6 border-bronze flex">
                    <img className="w-64 mt-6 ml-8 mb-2 rounded-lg drop-shadow-2xl  h-80" src="/giofotot6.png" alt="foto giovana basílio " />
                    <div>
                    <p className="text-2xl font-bold ml-20 mb-2 mt-6">Giovana Basílio</p>
                    <p className="text-left font-bold ml-20 mb-2 mt-6">Sou Giovana Maia Basílio, natural de Campinas, e atualmente conto com 16 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI.</p>
                    </div>
                </div>


                <div className="bg-slate-800 w-2/4 h-76 rounded-3xl mt-10 mb-6 border-bronze flex">
                    <img className="w-64 mt-6 ml-8 mb-2 rounded-lg drop-shadow-2xl  h-80" src="/fotojulia.png" alt="foto julia martins " />
                    <div>
                    <p className="text-2xl font-bold ml-20 mb-2 mt-6">Julia Martins</p>
                    <p className="text-left font-bold ml-20 mb-2 mt-6">Sou Julia Martins Leite, natural de Campinas, e atualmente conto com 16 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI.</p>
                    </div>
                </div>


                <div className="bg-slate-800 w-2/4 h-76 rounded-3xl mt-10 mb-6 border-bronze flex">
                    <img className="w-64 mt-6 ml-8 mb-2 rounded-lg drop-shadow-2xl  h-80" src="/samuelfoto5.png" alt="foto julia martins " />
                    <div>
                    <p className="text-2xl  font-bold ml-20 mb-2 mt-6">Samuel pinheiro</p>
                    <p className="text-left font-bold ml-20 mb-2 mt-6">Sou Samuel Pinheiros, natural de Campinas, e atualmente conto com 17 anos de idade. Encontro-me matriculado no curso de Desenvolvimento de Sistemas no SENAI.</p>
                    </div>
                   
                </div>
            </div>






            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />
        </div>
    )
}


export default Sobrenos
