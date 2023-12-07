import React from 'react';

function ContactForm({ contato, handleChange, handleSubmit }) {
  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      {/* Restante do código do formulário */}
      {/* Certifique-se de substituir todas as instâncias de `contato` e `handleChange` por `props.contato` e `props.handleChange`, respectivamente */}
      <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-lbronze text-xs font-bold mb-2" htmlFor="nome">
                                    Nome
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-lbronze focus:border-gray-500" id="nome" name="nome" type="text" placeholder="Nome" value={contato.nome} onChange={handleChange} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-lbronze text-xs font-bold mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-lbronze focus:border-gray-500" id="email" name="email" type="email" placeholder="E-mail" value={contato.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-lbronze text-xs font-bold mb-2" htmlFor="telefone">
                                    Telefone
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py
                        -3 px-4 mb-3 leading-tight focus:outline-none focus:bg-lbronze focus:border-gray-500" id="telefone" name="telefone" type="text" placeholder="Telefone" value={contato.telefone} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-lbronze text-xs font-bold mb-2" htmlFor="mensagem">
                                    Mensagem
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py
                        -3 px-4 mb-3 leading-tight focus:outline-none focus:bg-lbronze focus:border-gray-500" id="mensagem" name="mensagem" type="text" placeholder="Mensagem" value={contato.mensagem} onChange={handleChange} />
                            </div>

                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </div>
    </form>
  );
}

export default ContactForm;