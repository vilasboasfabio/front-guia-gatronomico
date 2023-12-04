import React from 'react';

const ContatoForm = ({
    contato,
    handleChange,
    handleSubmit,
    errors,
    formRef

}) => {
    return (
        <div className="container mx-auto p-6 bg-white bg-opacity-100 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Cadastro para Contato</h2>

            <form ref={formRef}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                    <input
                        id="nome"
                        name="nome"
                        type="text"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.nome && <p className="error-message">{errors.nome}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="telefone" className="block text-gray-700 text-sm font-bold mb-2">Telefone:</label>
                    <input
                        id="telefone"
                        name="telefone"
                        type="text"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.telefone && <p className="error-message">{errors.telefone}</p>}
                </div>

                <div>
                    <label htmlFor="mensagem" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                    <input
                        id="mensagem"
                        name="mensagem"
                        type="text"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.mensagem && <p className="error-message">{errors.mensagem}</p>}
                </div>
                <button className="w-full mt-7 bg-blue-950 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>Cadastrar</button>

            </form>
        </div>
    )

}

export default ContatoForm