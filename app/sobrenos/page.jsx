'use client';



import Footer from "../components/Footer";
import Header from "../components/Header";
import TinderCard from 'react-tinder-card';
import React, { useState, useEffect } from "react";

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
    const [currentIndex, setCurrentIndex] = useState(cardData.length - 1);
    const [cards, setCards] = useState(cardData);

   
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    // Verificar se o último cartão foi deslizado e reiniciar o carrossel
    useEffect(() => {
        if (currentIndex < 0) {
            setCurrentIndex(cardData.length - 1);
        }
    }, [currentIndex, cardData.length]);

    const onSwipe = (direction, index) => {
        console.log(`You swiped ${direction} on ${index}`);
        // Se for o último cartão, reinicia os cartões
        if (index === 0) {
            setCards([...cardData]); // Recria uma nova instância do array de cartões
            setCurrentIndex(cardData.length - 1); // Reseta o índice
        } else {
            setCurrentIndex(currentIndex - 1); // Decrementa o índice
        }
    };

    return (
        <div className=" bg-slate-900 min-h-screen flex flex-col text-slate-200">
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />


            <div className="relative ">
                <img className="w-full h-auto opacity-50" src="/equipechefs.jpg" alt="Equipe Chefs" />
                <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center resp-hid">
                    <p className="text-6xl font-bold mr-auto ml-36 mt-80 text-slate-300">Sobre Nós</p>
                    <p className="text-1xl mr-auto ml-36 mt-4 w-2/3 text-justify font-light ">Se você é daqueles que consideram a experiência de saborear uma refeição como uma verdadeira celebração para os sentidos, então o Elite Chefs é o seu guia essencial. Embarque conosco em uma jornada sensorial através dos mais extraordinários restaurantes, onde cada prato conta uma história de inovação culinária e sabor autêntico.</p>
                </div>
            </div>



            <div>
                <p className=" text-3xl mt-6 ml-36 w-auto font-bold">Conheça nossos diretores:</p>
                <hr className='bg-lbronze h-0.5 lg:w-96 w-48 mx-auto lg:ml-36 mt-1' />
            </div>


            <div className="min-h-screen mb-12">


             
            <div className="flex justify-center mt-12">
                {cards.map((card, index) => (
                    <TinderCard
                        key={index}
                        onSwipe={(dir) => onSwipe(dir, index)}
                        onCardLeftScreen={() => onCardLeftScreen(card.name)}
                        preventSwipe={['up', 'down']}
                        className={`absolute ${index === currentIndex ? '' : 'hidden'}`} // Use 'hidden' para esconder os cartões não ativos
                    >
                        <div className="bg-slate-800 lg:w-96 w-80 h-76 rounded-3xl border-bronze p-4">
                            <img className="w-full h-50 rounded-lg" src={card.url} alt={card.name} />
                            <h3 className="text-center text-2xl font-bold mt-4">{card.name}</h3>
                            <p className="text-center text-justify mt-4">{card.descricao}</p>
                          
                        </div>
                    </TinderCard>
                ))}
            </div>


            </div>



            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />
        </div>
    )
}


export default Sobrenos
