import React from 'react';

function ContactForm({ contato, handleChange, handleSubmit }) {
  return (
    <form className="w-full max-w-lg bg-slate-900 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6">{/* formulario */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
               {/* Nome */}
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="nome">
                Nome
            </label>
        {/*input */}
            <input className="appearance-none block w-full bg-transparent text-white border-b  border-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white" id="nome" name="nome" type="text" placeholder="Nome" value={contato.nome} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/2 px-3">
               {/* E-mail */}
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                E-mail
            </label>
             {/*input */}
            <input className="appearance-none block w-full bg-transparent text-white border-b border-white  py-3 px-4 leading-tight focus:outline-none focus:border-white" id="email" name="email" type="email" placeholder="E-mail" value={contato.email} onChange={handleChange} />
        </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
               {/* Telefone */}
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="telefone">
                Telefone
            </label>
             {/*input */}
            <input className="appearance-none block w-full bg-transparent text-white border-b border-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white" id="telefone" name="telefone" type="text" placeholder="Telefone" value={contato.telefone} onChange={handleChange} />
        </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
               {/* Mensagem */}
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="mensagem">
                Mensagem
            </label>
                {/*text de mensagem */}
            <textarea className="appearance-none block w-full bg-transparent text-white border-b border-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white" id="mensagem" name="mensagem" placeholder="Mensagem" value={contato.mensagem} onChange={handleChange} />
        </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 mx-auto px-3 mb-6 md:mb-0">
             {/*botão de enviar */}
            <button className="w-full bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white rounded hover:text-[#a68b60] transition duration-300 ease-in-out" type="submit">
                Enviar
            </button>
        </div>
    </div>
</form>

  );
}

export default ContactForm;