import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { TbMichelinStar } from 'react-icons/tb';

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
            <main className="bg-opacity-100 shadow-lg rounded-lg overflow-y-auto w-full h-full relative z-10 p-4 bg-image-2 ">
                <button
                    className=" mt-3  rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
                    onClick={abrir}
                >
                    <span className="sr-only">Close panel</span>
                    <AiOutlineClose color='#CEB591' className="h-8 w-8  rounded-md" aria-hidden="true" />
                </button>
                <article>

                    <div>
                        <img className=" w-11/12 mb-10 mx-auto h-80  object-cover rounded-lg mt-8" src={restaurante.img} alt="Imagem do Restaurante" />
                    </div>
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-4xl mb-2 text-lbronze "  >{restaurante.nome} - {restaurante.chefe}</div>

                        <div className='text-center font-thin text-white ml-5 mt-4'>{restaurante.loc}</div>

                        <dl className="mt-1 flex-grow flex flex-col justify-between">

                            <div className=" text-base mt-3 text-lbronze w-auto p-1 rounded-lg mx-auto">{restaurante.tipo}</div>

                            <dt className="sr-only">Valor</dt>
                            <div className=" mx-auto justify-between  items-center">
                                <span className="rounded-full flex px-2 py-1 text-xs font-bold text-indigo-100 mt-5 ">
                                    {Array(restaurante.avaliacao).fill(<TbMichelinStar className='text-lbronze' size={24} />)}
                                </span>
                            </div>
                        </dl>
                    </div>
                    <div className="px-6 py-4 scroll-auto  ">
                        <div>
                            <hr className=' bg-white rounded-lg opacity-10 h-0.5' />

                            <h3 className='text-center text-2xl mt-4 font-bold text-lbronze'>Descrição</h3>

                            <div className="text-cm font-thin w-1/2 mt-5 mx-auto text-justify text-white">{restaurante.descricao}</div>


                            <h3 className='text-center text-2xl mt-4 font-bold text-lbronze'>Informações</h3>

                            
                                <span className="text-lbronze justify-center mt-5 mx-auto flex rounded-full text-xs font-medium">
                                    {Array(restaurante.valor).fill(<MdAttachMoney className='text-lbronze' size={24} />)}
                                </span>

                            <hr className=' bg-white  mt-10 rounded-lg opacity-10 h-0.5' />
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Horário de funcionamento</h3>
                            <hr className=' bg-white mt-5 rounded-lg opacity-10 h-0.5' />

                            <div className='text-center font-thin text-white ml-5 mt-4'>{restaurante.funcionamento}</div>
                        </div>
                        <div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Formas de Pagamento:</h3>
                            <div className='text-center font-thin text-white ml-5 mt-4'>{restaurante.pagamento}</div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
export default CardDetalhesRestaurante;