import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CardDetalhesRestaurante = ({ restaurante, abrir }) => {
    const getPrecoLegenda = (valor) => {
        switch (valor) {
            case 1: return 'Preço camarada';
            case 2: return 'Preço Justo';
            case 3: return 'Vale a pena um investimento';
            case 4: return 'Para dias especiais';
            default: return '';
        }
    }

    const getEstrelasLegenda = (avaliacao) => {
        switch (avaliacao) {
            case 1: return 'Vale a pena uma visita';
            case 2: return 'Local de excelencia para qualquer ocasião';
            case 3: return 'Espetacular, vale a pena fazer a loucura';
            default: return '';
        }
    }

    return (
        <div className="fixed inset-0 h-screen flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={abrir}></div>
            <main className="bg-white bg-opacity-100 shadow-lg rounded-lg overflow-y-auto w-full h-full relative z-10 p-4 bg-image-2 ">
                <button
                    className=" mt-3  rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
                    onClick={abrir}
                >
                    <span className="sr-only">Close panel</span>
                    <AiOutlineClose color='#CEB591' className="h-6 w-6 " aria-hidden="true" />
                </button>
                <article>

                    <div>
                        <img className=" w-2/3 mb-10 mx-auto h-64 object-cover rounded-lg mt-4" src={restaurante.img} alt="Imagem do Restaurante" />
                    </div>
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-4xl mb-2 text-lbronze "  >{restaurante.nome} - {restaurante.chefe}</div>

                        <div className='text-center  text-white ml-5 mt-4'>{restaurante.loc}</div>

                        <dl className="mt-1 flex-grow flex flex-col justify-between">

                            <div className=" text-base mt-3 text-white">{restaurante.tipo}</div>

                            <dt className="sr-only">Valor</dt>
                            <dd className="mt-10 lg:flex justify-center mb-5">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium text-lbronze bg-gray-500 rounded-full">
                                    {'$'.repeat(restaurante.valor)}
                                </span>
                                <span className="ml-2 mt-1 text-base text-white">{getPrecoLegenda(restaurante.valor)}</span>
                                <span className="inline-flex items-center justify-center ml-3 px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-500 rounded-full">
                                    {'⭐'.repeat(restaurante.avaliacao)}
                                </span>
                                <span className="ml-2 mt-1 text-base text-white">{getEstrelasLegenda(restaurante.avaliacao)}</span>
                            </dd>
                        </dl>
                    </div>
                    <div className="px-6 py-4 scroll-auto  ">
                        <div>
                            <hr className='bg-lbronze h-0.5 opacity-20' />

                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Descrição</h3>
                            <div className="text-cm w-1/2 mx-auto text-justify text-white">{restaurante.descricao}</div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Horário de funcionamento</h3>
                            <div className='text-center text-white ml-5 mt-4'>{restaurante.funcionamento}</div>
                        </div>
                        <div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Localização:</h3>

                        </div>
                        <div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Formas de Pagamento:</h3>
                            <div className='text-center text-white ml-5 mt-4'>{restaurante.pagamento}</div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
export default CardDetalhesRestaurante;