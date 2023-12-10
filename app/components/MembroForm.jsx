import React from "react";

function MemberForm({ membro, handleChange, handleSubmit, handleUpdate, editando, selecionado }) {
    return (
        <form className="space-y-4 bg-white lg:p-6 p-4 rounded-xl shadow-md">
            {/* Campos do Formulário */}
            <div className="flex flex-col">
                <label htmlFor="nome" className="mb-2">Nome</label>
                <input type="text" className="border p-2 rounded-lg border-bronze" id="nome" name="nome" value={membro.nome} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="idade" className="mb-2">Idade</label>
                <input type="text" className="border p-2 rounded-lg border-bronze" id="idade" name="idade" value={membro.idade} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="posicao" className="mb-2">Posição</label>
                <input type="text" className="border p-2 rounded-lg border-bronze" id="posicao" name="posicao" value={membro.posicao} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="descricao" className="mb-2 ">Descrição</label>
                <input type="text" className="border p-2 rounded-lg border-bronze" id="descricao" name="descricao" value={membro.descricao} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="senha" className="mb-2">Senha</label>
                <input type="text" className="border p-2 rounded-lg border-bronze" id="senha" name="senha" value={membro.senha} onChange={handleChange} />
            </div>

            {
                editando ? (
                    <button className="w-1/2 lg:ml-56 mx-auto bg-[#78594D] hover:bg-[#7D665C] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" onClick={() => handleUpdate(selecionado.id, membro)}>
                        Atualizar
                    </button>
                ) : (
                    <button className="lg:w-1/2 w-full lg:ml-56 mx-auto bg-bronze hover:bg-[#7D665C] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
                        Cadastrar
                    </button>
                )
            }
        </form>
        
    );
}

export default MemberForm;
