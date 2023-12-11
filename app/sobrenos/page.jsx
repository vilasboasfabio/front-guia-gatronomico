'use client';

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../components/Footer";
import Header from "../components/Header";


function Sobrenos() {

    const cardData = [
        // ...seus dados de cartões
        {
            name: 'Ana Clara Cavalcante Reis',
            url: '/eu.png',
            descricao: 'Sou Ana Clara, natural de Valinhos-SP, e atualmente conto com 17 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonada por tecnologia e por tudo que ela pode nos proporcionar, e por isso, estou sempre buscando aprender mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos.'
        },
        {
            name: 'Fábio Vilas Boas Simões Junior',
            url: '/fabiocirculo.png',
            descricao: 'Sou Fábio Junior, natural de Sorocaba-SP, e atualmente conto com 16 anos de idade. Encontro-me matriculado no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonado por tecnologia e por tudo que ela pode nos proporcionar, e por isso, estou sempre buscando aprender mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos.'
        },
        {
            name: 'Giovana Maia Basílio',
            url: '/giofotot6.png',
            descricao: 'Sou Giovana, natural de Campinas-SP, e atualmente conto com 16 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonada por tecnologia e por tudo que ela pode nos proporcionar, e por isso, estou sempre buscando aprender mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos.'
        },
        {
            name: 'Julia Martins Leite',
            url: '/fotojulia.png',
            descricao: 'Sou Julia, natural de Campinas-SP, e atualmente conto com 16 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonada por tecnologia e por tudo que ela pode nos proporcionar, e por isso, estou sempre buscando aprender mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos.'
        },
        {
            name: 'Samuel Pinheiro',
            url: '/samuelfoto5.png',
            descricao: 'Sou Samuel, natural de Campinas-SP, e atualmente conto com 17 anos de idade. Encontro-me matriculado no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonado por tecnologia e por tudo que ela pode nos proporcionar, e por isso, estou sempre buscando aprender mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos.'
        },
    ];
    const [autoplay, setAutoplay] = useState(true);
    const [progress, setProgress] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0); // Adicione esta linha
    const sliderRef = useRef();

    useEffect(() => {
        if (autoplay && progress < 100) {
            const timer = setTimeout(() => {
                setProgress(progress + 2); // Incrementa a barra de progresso
            }, 100); // Intervalo de atualização da barra de progresso

            return () => clearTimeout(timer);
        } else if (progress >= 100) {
            // Se a barra de progresso completou, avança para o próximo slide
            sliderRef.current.slickNext();
            setProgress(0);
        }
    }, [progress, autoplay]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        beforeChange: () => setProgress(0),
        afterChange: (index) => {
            setProgress(0);
            setSliderIndex(index); // Agora essa função está definida
        },
        ref: sliderRef
    };

    return (
        <div>
            <div className="bg-slate-900 min-h-screen flex flex-col text-slate-200">
                {/*cabeçalho */}
                <Header />
                <hr className='bg-lbronze h-2 -mt-1' />

                <div className="relative ">
                    <img className="w-full h-auto opacity-50" src="/equipechefs.jpg" alt="Equipe Chefs" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center resp-hid">
                        <p className="text-6xl font-bold mr-auto ml-36 mt-80 text-slate-300">Sobre Nós</p>
                        <p className="text-1xl mr-auto ml-36 mt-4 w-2/3 text-justify font-light ">Se você é daqueles que consideram a experiência de saborear uma refeição como uma verdadeira celebração para os sentidos, então o Elite Chefs é o seu guia essencial. Embarque conosco em uma jornada sensorial através dos mais extraordinários restaurantes, onde cada prato conta uma história de inovação culinária e sabor autêntico.</p>
                    </div>
                    {/*   a div acima é responsável por colocar o texto sobre a imagem */}
                    
            </div>

                <div className='mx-auto mb-6'>
                    <p className=" text-3xl mt-6 ml-6 mb-6 w-auto font-bold">Conheça nossos diretores:</p>
                    <hr className='bg-lbronze h-0.5 lg:w-96 w-48 mx-auto lg:ml-6 mt-1' />
                </div>
                {/*na div acima está o título da página
*/}             <div className="min-h-screen mb-12">
                    <div className="relative mt-6">
                        <div className="max-w-xl mx-auto overflow-hidden">
                            <Slider ref={sliderRef} {...settings}>
                                {cardData.map((card, index) => (
                                    <div key={index} onClick={() => setAutoplay(!autoplay)}  className="px-4 flex justify-center items-cente bg-slate-800 border-bronze rounded-md p-8">
                                        <div className="max-w-md mx-auto">
                                            {/* essa div é usada para colocar os cards em um carrossel*/}
                                            <img src={card.url} alt={card.name} className="mx-auto" style={{ height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
                                            <h2 className="text-2xl font-bold mb-4 mt-4 text-center">{card.name}</h2>
                                            <hr className='bg-lbronze h-0.5 mb-3 w-48 mx-auto mt-1' />
                                            <p className="text-justify">{card.descricao}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            {/* ESSA DIV É usada abaixo é usada para colocar a barra de progresso do carrossel
*/} 
                            <div className='w-11/12 ml-5 h-2 bg-gray-200 my-4'>
                                <div className='h-full bg-lbronze' style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <hr className='bg-lbronze h-2 -mt-1' />
                <Footer />
            </div>
        </div>
    )
}


export default Sobrenos
