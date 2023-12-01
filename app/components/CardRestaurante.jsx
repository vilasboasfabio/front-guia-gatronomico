
import React from 'react';

function RestauranteCard({ restaurante, onEdit, onDelete }) {
  return (
    <div className="max-w-sm rounded mt-5 bg-bronze overflow-hidden shadow-lg hover:scale-105 hover:transition-all hover:opacity-80 border-bronze">
      <img className="w-full" src={restaurante.img} alt="Imagem do Restaurante" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-lbronze"  >{restaurante.nome} - {restaurante.chefe}</div>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dd className="text-sm text-white">{restaurante.loc}</dd>
          <dt className="sr-only">Valor</dt>
          <dd className="mt-3 lg:flex">
            <span className="px-2 py-1 text-green-800 text-xs font-medium text-lbronze bg-gray-500 rounded-full">
              {'$'.repeat(restaurante.valor)}
            </span>
            <span className="inline-flex items-center justify-center ml-60 px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-500 rounded-full">
              {'⭐'.repeat(restaurante.avaliacao)}
            </span>
          </dd>
        </dl>
      </div>
      <hr className="bg-lbronze h-1" />
      <div className="p-6">

        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onEdit(restaurante.id)}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-gray-950 focus:outline-none"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(restaurante.id)}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-gray-950 focus:outline-none"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default RestauranteCard;