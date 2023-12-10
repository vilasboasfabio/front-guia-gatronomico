'use client';

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


function PaginaSobre() {
    return (
        <main className="bg-slate-900 ">
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />

            <section className="mt-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">Bem-vindo ao Elite Chefs</h1>

            </section>
            <article className="lg:flex flex-col resp-hid ">
                <hr className='bg-lbronze h-72 w-0.5 mx-auto mt-8 resp-hid' />
                <div className="lg:flex">
                    <section className="bg-bronze w-1/3 h-72 rounded-2xl ml-48 -mt-72 border-bronze">
                        <h1 className="font-bold text-xl text-lbronze text-center  mb-4 mt-4 font">Descubra Destinos Gastronômicos Exclusivos:</h1>
                        <p className=" text-white ml-2 mr-2 text-center w-96 font-light">Elite Chefs é mais do que um guia; é uma jornada gastronômica que o leva aos destinos mais exclusivos e emocionantes para paladares sofisticados. Seja você um entusiasta da cozinha internacional, um apaixonado por pratos regionais ou um explorador de novas tendências culinárias, o Elite Chefs tem a lista perfeita de restaurantes para satisfazer seus desejos.</p>
                    </section>
                    <img className="ml-32 h-40 -mt-60" src="/pratocomida.png" alt="ícone prato de comida" />
                </div>

                <hr className='bg-lbronze h-96 w-0.5 mx-auto resp-hid -mt-8 resp-hid ' />
                <div className="lg:flex">
                    <img className="ml-96 h-40 -mt-60" src="/cardapio.png" alt="ícone cardápio" />
                    <section className="bg-bronze w-1/3 h-76 rounded-2xl ml-auto mr-48 -mt-80 border-bronze mb-2">
                        <h1 className="text-xl text-center text-lbronze font-bold mb-4 mt-4">Curadoria de Especialistas:</h1>
                        <p className=" text-white ml-2 mr-2 text-center mb-4 font-light">Nossa equipe de especialistas em gastronomia trabalha incansavelmente para oferecer a você um guia confiável e atualizado. Cada restaurante apresentado no Elite Chefs passa por um processo rigoroso de seleção, garantindo que apenas os estabelecimentos mais excepcionais e inovadores sejam destacados. Confie em nós para proporcionar uma experiência gastronômica digna dos verdadeiros apreciadores de comida.</p>
                    </section>
                </div>

                <hr className='bg-lbronze h-80 w-0.5 mx-auto -mt-2 resp-hid ' />
                <div className="lg:flex">
                    <section className="bg-bronze w-1/3 h-64 rounded-2xl ml-48 mr-56 -mt-72 border-bronze ">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4">Explore Diversidade de Sabores:</h1>
                        <p className=" text-white ml-2 mr-2 text-center mb-4 font-light">Do requinte clássico à vanguarda culinária, nosso guia abrange uma variedade de estilos e influências. De restaurantes premiados a joias escondidas, cada escolha reflete a paixão e o compromisso com a excelência. Deixe-se levar por uma jornada sensorial enquanto explora uma rica tapeçaria de sabores.</p>
                    </section>
                    <img className="-ml-24 h-40 -mt-60" src="medalha.png" alt="ícone medalha" />
                </div>

                <hr className='bg-lbronze h-96 w-0.5 mx-auto -mt-8 resp-hid ' />
                <div className="lg:flex">
                    <img className="ml-96 h-40 -mt-72" src="/restaurante.png" alt="ícone restaurante" />
                    <section className="bg-bronze w-1/3 h-64 rounded-2xl ml-auto mr-48 -mt-80 border-bronze">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4">Avaliações Autênticas:</h1>
                        <p className=" text-white ml-2 mr-2 text-center mb-4 font-light">Para garantir sua confiança, o Elite Chefs oferece avaliações autênticas e imparciais de críticos respeitados. Além disso, incentivamos a comunidade a compartilhar suas próprias experiências, criando uma rede dinâmica de recomendações que elevam ainda mais a qualidade do guia.</p>
                    </section>
                </div>

                <hr className='bg-lbronze h-96 w-0.5 mx-auto -mt-8 resp-hid ' />
                <div className="lg:flex">
                    <section className="bg-bronze w-1/3 h-64 rounded-2xl ml-48 mr-56 -mt-96 border-bronze">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4">Planeje sua Próxima Experiência</h1>
                        <p className=" text-white ml-2 mr-2 text-center mb-4 font-light">Navegue pelo Elite Chefs para planejar sua próxima aventura gastronômica. Descubra novos sabores, encontre o local perfeito para cada ocasião e mergulhe em um mundo de possibilidades culinárias. Com recursos úteis, como avaliações, menus e dicas locais, estamos aqui para tornar sua jornada gastronômica memorável.</p>
                    </section>
                    <img className="-ml-24 h-40 -mt-80" src="maocomida.png" alt="ícone mão segunrando comida" />
                </div>

                <hr className='bg-lbronze h-80 w-0.5 mx-auto -mt-8 resp-hid' />
                <div className="lg:flex mt-20">
                    <img className="ml-96 h-40 -mt-96" src="/parceria.png" alt="ícone restaurante" />
                    <section className="bg-bronze w-1/3 h-52 rounded-2xl ml-auto mr-48 -mt-96 border-bronze mb-8">
                        <h1 className="font-bold text-xl text-lbronze  text-center mb-4 mt-4">Junte-se à Comunidade Elite:</h1>
                        <p className=" text-white ml-2 mr-2 text-center mb-4 font-light">Embarque nesta jornada gastronômica extraordinária com o Elite Chefs. Descubra, saboreie e celebre as melhores experiências culinárias ao redor do mundo. Sua próxima aventura gastronômica começa aqui.</p>
                    </section>
                </div>
            </article>
            <article className="lg:hidden">

                <div className="lg:flex">
                    <section className=" mx-auto bg-bronze p-2 w-4/5 rounded-lg border-bronze mb-5">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4 font">Descubra Destinos Gastronômicos Exclusivos:</h1>
                        <p className=" text-white ml-2 mr-2 text-justify font-light">Elite Chefs é mais do que um guia; é uma jornada gastronômica que o leva aos destinos mais exclusivos e emocionantes para paladares sofisticados. Seja você um entusiasta da cozinha internacional, um apaixonado por pratos regionais ou um explorador de novas tendências culinárias, o Elite Chefs tem a lista perfeita de restaurantes para satisfazer seus desejos.</p>
                    </section>
                </div>


                <div className="lg:flex">
                    <section className=" mx-auto bg-bronze p-2 w-4/5 rounded-lg border-bronze mb-5">
                        <h1 className="text-xl text-center text-lbronze font-bold mb-4 mt-4">Curadoria de Especialistas:</h1>
                        <p className=" text-white ml-2 mr-2 text-justify mb-4 font-light">Nossa equipe de especialistas em gastronomia trabalha incansavelmente para oferecer a você um guia confiável e atualizado. Cada restaurante apresentado no Elite Chefs passa por um processo rigoroso de seleção, garantindo que apenas os estabelecimentos mais excepcionais e inovadores sejam destacados. Confie em nós para proporcionar uma experiência gastronômica digna dos verdadeiros apreciadores de comida.</p>
                    </section>
                </div>


                <div className="lg:flex">
                    <section className=" mx-auto bg-bronze p-2 w-4/5 rounded-lg border-bronze mb-5">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4">Explore Diversidade de Sabores:</h1>
                        <p className=" text-white ml-2 mr-2 text-justify mb-4 font-light">Do requinte clássico à vanguarda culinária, nosso guia abrange uma variedade de estilos e influências. De restaurantes premiados a joias escondidas, cada escolha reflete a paixão e o compromisso com a excelência. Deixe-se levar por uma jornada sensorial enquanto explora uma rica tapeçaria de sabores.</p>
                    </section>
                </div>

                <div className="lg:flex">
                    <section className=" mx-auto bg-bronze p-2 w-4/5 rounded-lg border-bronze mb-5">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4">Avaliações Autênticas:</h1>
                        <p className=" text-white ml-2 mr-2 text-justify mb-4 font-light">Para garantir sua confiança, o Elite Chefs oferece avaliações autênticas e imparciais de críticos respeitados. Além disso, incentivamos a comunidade a compartilhar suas próprias experiências, criando uma rede dinâmica de recomendações que elevam ainda mais a qualidade do guia.</p>
                    </section>
                </div>


                <div className="lg:flex">
                    <section className=" mx-auto bg-bronze p-2 w-4/5 rounded-lg border-bronze mb-5">
                        <h1 className="font-bold text-xl text-lbronze text-center mb-4 mt-4">Planeje sua Próxima Experiência</h1>
                        <p className=" text-white ml-2 mr-2 mb-4  text-justify font-light">Navegue pelo Elite Chefs para planejar sua próxima aventura gastronômica. Descubra novos sabores, encontre o local perfeito para cada ocasião e mergulhe em um mundo de possibilidades culinárias. Com recursos úteis, como avaliações, menus e dicas locais, estamos aqui para tornar sua jornada gastronômica memorável.</p>
                    </section>
                </div>

                <div className="lg:flex">
                    <section className=" mx-auto bg-bronze p-2 w-4/5 rounded-lg border-bronze mb-5">
                        <h1 className="font-bold text-xl text-lbronze  text-center mb-4 mt-4">Junte-se à Comunidade Elite:</h1>
                        <p className=" text-white ml-2 mr-2 text-justify mb-4 font-light">Embarque nesta jornada gastronômica extraordinária com o Elite Chefs. Descubra, saboreie e celebre as melhores experiências culinárias ao redor do mundo. Sua próxima aventura gastronômica começa aqui.</p>
                    </section>
                </div>

            </article>
            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />

        </main>

    )
}

export default PaginaSobre;