import React from "react";

const Footer = () => {
    return (
        <div className="bg-slate-900 text-white p-5 text-center text-26xl  tracking-wider uppercase mt-0 max-w-full ">
            <section className="lg:flex  ">
                <div className=" font-sans font-thin text-xs w-3/5 ml-4 text-start mt-3">
                    <h3 className=" mb-3 font-semibold text-sm">Endereço</h3>
                    <p>Endereço: R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP, 13270-530. SENAI Valinhos CE:564</p>
                </div>
                <div className=" font-sans font-thin text-xs w-3/5 ml-4 text-start mt-3">
                <h3 className=" mb-3 font-semibold text-sm">Nosso Trabalho.</h3>
                    <p> Nós somos a ELITE CODERS, uma equipe do SENAI-SP formada por um grupo de estudantes motivados e dedicados a aprender e desenvolver suas habilidades em suas áreas de interesse. Cada membro da equipe traz consigo sua própria perspectiva única e conjunto de habilidades, tornando nossa equipe diversa e criativa. Trabalhamos juntos em projetos desafiadores, buscando sempre superar nossos limites e aprender com nossos erros.</p>
                </div>
                <div className=" font-sans font-thin text-xs w-3/5 ml-4 text-start mt-3">
                <h3 className=" mb-3 font-semibold text-sm">Direitos Autorais</h3>
                    <p>Todos os direitos são restritamente reservados à equipe realizadora do projeto, respectivamente, a Elite Coders. Quaisquer violanções das diretrizes dos direitos de retenção autoral e de originalidade desse projetão, estão sujeitos à devidas medidas de retenção e processo. Caso haja duvidas, entre em contato com o nosso suporte técnico: elitecoders@gmail.com.</p>
                </div>

            </section>
            <hr className=" mt-20 mb-20 ml-20 mr-20"  />

            <section className="lg:flex  ml-24 mb-20 mt-0 text-center font-extralight">
                <img src="/logo.png" alt="logo"  className=" w-20 -mt-9 "/>

                <p className="text-xs font-thin lg:ml-[60%] ">© 2023 - Todos os direitos reservados</p>
             
            </section>
        </div>
    )
}

export default Footer;