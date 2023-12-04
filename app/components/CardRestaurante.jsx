import React from 'react';

function RestauranteCard({ restaurante, onEdit, onDelete }) {
  // Limita a descrição a 350 caracteres, sem cortar palavras ao meio
  let descricaoCurta = restaurante.descricao.substring(0, 350);
  const ultimoEspaco = descricaoCurta.lastIndexOf(' ');

  if (ultimoEspaco > 0) {
    descricaoCurta = descricaoCurta.substring(0, ultimoEspaco);
  }

  // Adiciona reticências se a descrição for mais longa que 350 caracteres
  if (restaurante.descricao.length > 350) {
    descricaoCurta += '...';
  }

  return (
    <div className="max-w-sm rounded-2xl mt-5 bg-bronze overflow-hidden transition-transform duration-500 hover:scale-110 shadow-lg border-bronze relative group">
      {/* Descrição (inicialmente escondida e com transição suave) */}
      <div className="absolute top-0 inset-x-0 mt-8 px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10">
        <p className="text-sm text-white">{descricaoCurta}</p>
        <div className="flex justify-end w-fulls mt-4 mr-36">
          <button
            onClick={() => onEdit(restaurante.id)}
            className="bg-slate-900 hover:bg-slate-700 hover:text-lbronze hover:scale-90 text-white font-bold py-2 px-4 rounded-full mr-4"  >
            Editar
          </button>
          <button
            onClick={() => onDelete(restaurante.id)}
            className="bg-slate-900 hover:bg-slate-700 hover:scale-90 hover:text-lbronze text-white font-bold py-2 px-4 rounded-full">
            Deletar
          </button>
        </div>
        
      </div>
      {/* Imagem do Restaurante */}
      <img 
        className="w-full h-64 relative z-0 group-hover:translate-y-[200%] transition-transform duration-500 ease-in-out"
        src={restaurante.img} 
        alt="Imagem do Restaurante"
      />
      {/* Conteúdo do Card */}
      <div className="px-6 py-4 z-20">
        <div className="font-bold text-xl mb-2 text-lbronze">{restaurante.nome} - {restaurante.chefe}</div>
        <p className="text-sm text-white">{restaurante.loc}</p>
        <div className="flex justify-between mt-6 items-center">
          <span className="text-lbronze bg-gray-500 rounded-full px-2 py-1 text-xs font-medium">
            {'$'.repeat(restaurante.valor)}
          </span>
          <span className="bg-gray-500 rounded-full px-2 py-1 text-xs font-bold text-indigo-100 -ml-72">
            {'⭐'.repeat(restaurante.avaliacao)}
          </span>
        </div>
        <hr className='bg-lbronze h-1 mb-6 mt-6' />
        <div className="flex mt-4 mr-36">
          <h3 className='font-bold text-xl mb-2 text-lbronze'>{restaurante.tipo}</h3>
        
        </div>
      </div>
    </div>
  );
}

export default RestauranteCard;