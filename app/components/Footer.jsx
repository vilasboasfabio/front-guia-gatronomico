import React from "react";

const Footer = () => {
    return (
        <div className="bg-slate-900 text-white p-5 text-center text-26xl  tracking-wider uppercase mt-0 max-w-full">
            <section className="lg:flex w-full mx-auto">
                <div className=" font-sans font-thin text-xs w-5/6 lg:w-96 ml-4 text-justify mt-3">
                    <h3 className=" mb-3 font-semibold text-center text-sm">Endereço</h3>
                    <p>Endereço: R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP, 13270-530. SENAI Valinhos CE:564</p>
                </div>
                <div className=" font-sans font-thin text-xs text-justify lg:ml-24 lg:mr-24 lg:w-96 ml-4 mt-3">
                <h3 className=" mb-3 font-semibold text-center text-sm">Nosso Trabalho.</h3>
                    <p> Nós somos a ELITE CODERS, uma equipe do SENAI-SP formada por um grupo de estudantes motivados e dedicados a aprender e desenvolver suas habilidades em suas áreas de interesse. Cada membro da equipe traz consigo sua própria perspectiva única e conjunto de habilidades, tornando nossa equipe diversa e criativa. Trabalhamos juntos em projetos desafiadores, buscando sempre superar nossos limites e aprender com nossos erros.</p>
                </div>
                <div className=" font-sans font-thin text-xs text-justify lg:w-96 ml-4 mt-3">
                <h3 className=" mb-3 font-semibold text-center text-sm">Direitos Autorais</h3>
                    <p>Todos os direitos são restritamente reservados à equipe realizadora do projeto, respectivamente, a Elite Coders. Quaisquer violanções das diretrizes dos direitos de retenção autoral e de originalidade desse projetão, estão sujeitos à devidas medidas de retenção e processo. Caso haja duvidas, entre em contato com o nosso suporte técnico: elitecoders@gmail.com.</p>
                </div>

            </section>
            <hr className=" mt-20 mb-20 mx-auto lg:w-5/6 w-full"  />

            <section className="flex w-f lg:w-6/5 -ml-22 lg:ml-24 mb-20 mt-0 text-center font-extralight">
                <img src="/logo.png" alt="logo"  className=" w-20 -mt-9 "/>

                <p className="text-xs font-thin lg:ml-[63%] ">© 2023 - Todos os direitos reservados</p>
             
            </section>
        </div>
    )
}

export default Footer;