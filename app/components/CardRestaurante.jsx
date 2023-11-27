
import React from 'react';

function RestauranteCard({ restaurante, onEdit, onDelete }) {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={restaurante.img} alt="Imagem do restaurante" />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{restaurante.nome}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Endereço</dt>
          <dd className="text-gray-500 text-sm">{restaurante.loc}</dd>
          <dt className="sr-only">Valor</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {'$'.repeat(restaurante.valor)}
            </span>
          </dd>
        </dl>
      </div>
      <div className="border-t border-gray-200 p-6">
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">
          {'⭐'.repeat(restaurante.avaliacao)}
        </span>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onEdit(restaurante.id)}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(restaurante.id)}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none"
          >
            Deletar
          </button>
          </div>
      </div>
    </li>
  );
}

export default RestauranteCard;