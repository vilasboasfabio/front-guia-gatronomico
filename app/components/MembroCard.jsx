import React from 'react';

function MembroCard({ membro, handleDelete, handleEdit }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={membro.id}>
            {/* Id card de membros usado para pegar informações */}
            <div className="border p-4 rounded shadow-md bg-white">
                <div className="mb-4 ">
                    {/*  texto do card */}
                    <h5 className="text-2xl font-bold">{membro.nome} - {membro.posicao}</h5>
                    <p className="text-sm mt-3">{membro.idade}</p>
                    <p className="text-sm mt-3">{membro.descricao}</p>
                </div>
                <button className="bg-bronze text-white p-2 rounded-lg hover:bg-gray-700 mr-4" onClick={() => handleDelete(membro.id)}>Excluir</button>
                {/*  botão de excluir formulário de cadastro de membros */}
                    <button className="bg-bronze text-white p-2 rounded-lg hover:bg-gray-700" onClick={() => handleEdit(membro)}>Editar</button>
                    {/*  botão de excluir formulário de cadastro de membros */}
            </div>
        </div>
    );
}

export default MembroCard;