import React from 'react';

const CardDetalhesRestaurante = ({ restaurante, abrir }) => {
    const getPrecoLegenda = (valor) => {
        switch(valor) {
            case 1: return 'Preço camarada';
            case 2: return 'Preço Justo';
            case 3: return 'Vale a pena um investimento';
            case 4: return 'Para dias especiais';
            default: return '';
        }
    }

    const getEstrelasLegenda = (avaliacao) => {
        switch(avaliacao) {
            case 1: return 'Vale a pena uma visita';
            case 2: return 'Local de excelencia para qualquer ocasião';
            case 3: return 'Espetacular, vale a pena fazer a loucura';
            default: return '';
        }
    }

    return (
        <div className="fixed inset-0 h-screen flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={abrir}></div>
            <main className="bg-white bg-opacity-100 shadow-lg rounded-lg overflow-y-auto w-full h-full relative z-10 p-4">
                <button className="bg-blue-950 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full"
                    onClick={abrir}
                >Fechar</button>
                <article>
                    
                    <div>
                        <img className="w-full h-64 object-cover rounded-lg mt-4" src={restaurante.img} alt="Imagem do Restaurante" />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-lbronze"  >{restaurante.nome} - {restaurante.chefe}</div>
                        <div className="font-bold text-lg mb-2 text-lbronze">{restaurante.tipo}</div>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <div className="text-sm text-black">{restaurante.descricao}</div>
                            <div className="text-sm text-black">{restaurante.tipo}</div>
                            <dt className="sr-only">Localização</dt>
                            <dd className="text-sm text-white">{restaurante.loc}</dd>
                            <dt className="sr-only">Valor</dt>
                            <dd className="mt-3 lg:flex">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium text-lbronze bg-gray-500 rounded-full">
                                    {'$'.repeat(restaurante.valor)}
                                </span>
                                <span className="ml-2 mt-1 text-xs text-gray-600">{getPrecoLegenda(restaurante.valor)}</span>
                                <span className="inline-flex items-center justify-center ml-3 px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-500 rounded-full">
                                    {'⭐'.repeat(restaurante.avaliacao)}
                                </span>
                                <span className="ml-2 mt-1 text-xs text-gray-600">{getEstrelasLegenda(restaurante.avaliacao)}</span>
                            </dd>
                        </dl>
                    </div>
                    <div className="px-6 py-4 scroll-auto">
                        <div>
                            <hr className='bg-lbronze h-1' />
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Aberto em:</h3>
                            <div className='text-center ml-5 mt-4'>{restaurante.funcionamento}</div>
                        </div>
                        <div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Localização:</h3>
                            <div className='text-center ml-5 mt-4'>{restaurante.loc}</div>
                        </div>
                        <div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Formas de Pagamento:</h3>
                            <div className='text-center ml-5 mt-4'>{restaurante.pagamento}</div>
                        </div>
                        <div>
                            <h3 className='text-center text-md mt-4 font-bold text-lbronze'>Local:</h3>
                            <div className='text-center ml-5 mt-4'>{restaurante.loc}</div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
export default CardDetalhesRestaurante;