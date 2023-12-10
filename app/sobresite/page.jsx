'use client';

import Footer from "../components/Footer";
import Header from "../components/Header";
import TinderCard from 'react-tinder-card';
import React, { useState, useEffect, useRef } from 'react';

function PaginaSobre() {

    const cardData = [
        // ...seus dados de cartões com os mesmos textos e imagens desta página
        {
            name: 'Descubra Destinos Gastronômicos Exclusivos:',
            url: '/pratocomida.png',
            descricao: 'Elite Chefs é mais do que um guia; é uma jornada gastronômica que o leva aos destinos mais exclusivos e emocionantes para paladares sofisticados. Seja você um entusiasta da cozinha internacional, um apaixonado por pratos regionais ou um explorador de novas tendências culinárias, o Elite Chefs tem a lista perfeita de restaurantes para satisfazer seus desejos.'
        },
        {
            name: 'Curadoria de Especialistas:',
            url: '/cardapio.png',
            descricao: 'Nossa equipe de especialistas em gastronomia trabalha incansavelmente para oferecer a você um guia confiável e atualizado. Cada restaurante apresentado no Elite Chefs passa por um processo rigoroso de seleção, garantindo que apenas os estabelecimentos mais excepcionais e inovadores sejam destacados. Confie em nós para proporcionar uma experiência gastronômica digna dos verdadeiros apreciadores de comida.'
        },
        {
            name: 'Explore Diversidade de Sabores:',
            url: '/restaurante.png',
            descricao: 'Do requinte clássico à vanguarda culinária, nosso guia abrange uma variedade de estilos e influências. De restaurantes premiados a joias escondidas, cada escolha reflete a paixão e o compromisso com a excelência. Deixe-se levar por uma jornada sensorial enquanto explora uma rica tapeçaria de sabores.'
        },
        {
            name: 'Avaliações Autênticas:',
            url: '/medalha.png',
            descricao: 'Para garantir sua confiança, o Elite Chefs oferece avaliações autênticas e imparciais de críticos respeitados. Além disso, incentivamos a comunidade a compartilhar suas próprias experiências, criando uma rede dinâmica de recomendações que elevam ainda mais a qualidade do guia.'
        },
        {
            name: 'Planeje sua Próxima Experiência',
            url: '/maocomida.png',
            descricao: 'Navegue pelo Elite Chefs para planejar sua próxima aventura gastronômica. Descubra novos sabores, encontre o local perfeito para cada ocasião e mergulhe em um mundo de possibilidades culinárias. Com recursos úteis, como avaliações, menus e dicas locais, estamos aqui para tornar sua jornada gastronômica memorável.'
        },
        {
            name: 'Junte-se à Comunidade Elite:',
            url: '/parceria.png',
            descricao: 'Embarque nesta jornada gastronômica extraordinária com o Elite Chefs. Descubra, saboreie e celebre as melhores experiências culinárias ao redor do mundo. Sua próxima aventura gastronômica começa aqui.'
        },

    ];
    const [currentIndex, setCurrentIndex] = useState(cardData.length - 1);
    const [lastDirection, setLastDirection] = useState();
    const [allSwiped, setAllSwiped] = useState(false);
    const childRefs = React.useMemo(() => Array(cardData.length).fill(0).map(i => React.createRef()), [cardData]);
    const currentIndexRef = useRef(currentIndex); // Ref para rastrear o currentIndex atual

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val; // Atualize a ref sempre que o estado mudar
    };

    const onSwipe = (direction, indexToRemove) => {
        setLastDirection(direction);
        // Atualize o estado e remova o cartão da pilha
        updateCurrentIndex(currentIndexRef.current - 1);
    };

    // Lide com o que acontece quando o cartão sai da tela
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    useEffect(() => {
        // Se todos os cartões foram deslizados, reiniciar o índice
        if (currentIndexRef.current < 0) {
            updateCurrentIndex(cardData.length - 1);
        }
    }, [cardData.length]);

    // CSS para conter os cartões dentro da viewport e evitar overflow
    const containerStyles = {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
    };

    useEffect(() => {
        if (currentIndex < 0) {
            setAllSwiped(true);
        }
    }, [currentIndex]);

    // Função para resetar o carrossel
    const resetCarousel = () => {
        setAllSwiped(false);
        updateCurrentIndex(cardData.length - 1);
    };

    // Renderiza a mensagem e o botão se allSwiped for verdadeiro
    const renderEndOfCardsMessage = () => (
        <div className="text-center my-16">
            <h3  className="text-xl font-bold text-lbronze">Obrigado por escolher a Elite Chefs</h3>
            <button
                className="mt-5 bg-lbronze mx-auto text-white py-2 px-4 rounded-xl font-bold"
                onClick={resetCarousel}
            >
                Recomeçar
            </button>
        </div>
    );


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
            <article className="lg:hidden min-h-screen">

                <div style={containerStyles}>
                    <div className="flex justify-center mt-12">
                        {allSwiped ? (
                            renderEndOfCardsMessage()
                        ) : (cardData.map((card, index) => (
                            <TinderCard
                                ref={childRefs[index]}
                                key={index}
                                onSwipe={(dir) => onSwipe(dir, index)}
                                onCardLeftScreen={() => onCardLeftScreen(card.name)}
                                preventSwipe={['up', 'down']}
                                className={`absolute ${index === currentIndex ? '' : 'hidden'}`}
                            >
                                {/* ... contéudo do cartão ... */}
                                <div className="px-4 flex justify-center w-80 items-cente bg-bronze border-bronze rounded-xl text-white p-8">
                                    <div className=" mx-auto">
                                        <img src={card.url} alt={card.name} className="mx-auto" style={{ height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
                                        <h2 className="text-2xl font-bold mb-4 mt-4 text-center">{card.name}</h2>
                                        <hr className='bg-lbronze h-0.5 mb-3 w-48 mx-auto mt-1' />
                                        <p className="text-justify">{card.descricao}</p>
                                    </div>
                                </div>
                            </TinderCard>
                        )))}
                    </div>
                </div>
            </article>

            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />

        </main>

    )
}

export default PaginaSobre;