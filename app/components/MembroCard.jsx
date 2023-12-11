import React from 'react';

function MembroCard({ membro, handleDelete, handleEdit }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 h-1/2 p-4 " key={membro.id}>
            <div className="border-bronze p-4 rounded-lg shadow-md  opacity-80 bg-slate-800">
                <div className="mb-4 ">
                    <h5 className="text-2xl font-bold text-white ">{membro.nome} - {membro.posicao}</h5>
                    <hr className="bg-lbronze h-0.5 w-3/4 mx-auto mb-6 ml-0" />
                    <p className="text-sm -mt-2 font-light text-white">Idade: {membro.idade}</p>
                    <p className="text-sm mt-3 font-light text-white">{membro.descricao}</p>
                </div>
                <div className='flex'>
                <button className="bg-lbronze text-black p-2 rounded-lg hover:bg-sky-950 hover:text-white mr-4" onClick={() => handleDelete(membro.id)}>Excluir</button>
                <button className="bg-lbronze text-black p-2 rounded-lg hover:bg-sky-950 hover:text-white" onClick={() => handleEdit(membro)}>Editar</button>
                </div>
                
            </div>
        </div>
    );
}

export default MembroCard;