import React from 'react';

function MembroCard({ membro, handleDelete, handleEdit }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={membro.id}>
            <div className="border p-4 rounded shadow-md bg-white">
                <div className="mb-4 ">
                    <h5 className="text-2xl font-bold">{membro.nome} - {membro.posicao}</h5>
                    <p className="text-sm mt-3">{membro.idade}</p>
                    <p className="text-sm mt-3">{membro.descricao}</p>
                </div>
                <button className="bg-bronze text-white p-2 rounded-lg hover:bg-gray-700 mr-4" onClick={() => handleDelete(membro.id)}>Excluir</button>
                <button className="bg-bronze text-white p-2 rounded-lg hover:bg-gray-700" onClick={() => handleEdit(membro)}>Editar</button>
            </div>
        </div>
    );
}

export default MembroCard;