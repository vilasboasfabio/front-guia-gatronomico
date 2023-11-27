'use client';
console.log('CadastroRestaurante.jsx');
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CadastroRestaurante() {
    const [restaurante, setRestaurante] = useState({
        nome: '',
        img: '',
        loc: '',
        valor: '',
        tipo: '',
        chefe: '',
        descricao: '',
        funcionamento: [],
        pagamento: [],
        avaliacao: '',
        data: ''
    });
    const [restaurantes, setRestaurantes] = useState([]);


    const diasFuncionamento = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const formasPagamento = ["Dinheiro", "Cartão de Crédito", "Cartão de Débito"];

    const handleChange = (e) => {
        setRestaurante({ ...restaurante, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        let newSelection;

        if (name === "funcionamento") {
            newSelection = restaurante.funcionamento.includes(value)
                ? restaurante.funcionamento.filter(day => day !== value)
                : [...restaurante.funcionamento, value];
        } else if (name === "pagamento") {
            newSelection = restaurante.pagamento.includes(value)
                ? restaurante.pagamento.filter(form => form !== value)
                : [...restaurante.pagamento, value];
        }

        setRestaurante({ ...restaurante, [name]: newSelection });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosFormatados = {
            ...restaurante,
            valor: Number(restaurante.valor),
            avaliacao: Number(restaurante.avaliacao)
        };

        console.log(dadosFormatados)
        try {
            const response = await axios.post('http://localhost:4005/restaurante', dadosFormatados);
            console.log('response', response);
            console.log('Restaurante cadastrado:', response.data);
            console.log(dadosFormatados);
        } catch (error) {
            console.error('Erro ao enviar o formulário', error);
        }
    };

    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const response = await axios.get('http://localhost:4005/restaurante');
                setRestaurantes(response.data);
            } catch (error) {
                console.error('Erro ao buscar restaurantes', error);
            }
        };

        fetchRestaurantes();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Cadastro de Restaurantes</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="nome" className="sr-only">Nome:</label>
                            <input id="nome" name="nome" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nome" onChange={handleChange} />
                        </div>

                        <label htmlFor="imagem" className='block text-sm font-medium text-gray-700'>Imagem:</label>
                        <input type="text" name="img" id="imagem" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />

                        <label htmlFor="localizacao" className='block text-sm font-medium text-gray-700'>Localização:</label>
                        <input type="text" name="loc" id="localizacao" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />

                        <label htmlFor="valor" className='block text-sm font-medium text-gray-700'>Valor:</label>
                        <input type="text" name="valor" id="valor" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />

                        <label htmlFor="tipo" className='block text-sm font-medium text-gray-700'>Tipo:</label>
                        <input type="text" name="tipo" id="tipo" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />

                        <label htmlFor="chefe" className='block text-sm font-medium text-gray-700'>Chefe:</label>
                        <input type="text" name="chefe" id="chefe" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />

                        <label htmlFor="descricao" className='block text-sm font-medium text-gray-700'>Descrição:</label>
                        <input type="text" name="descricao" id="descricao" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />

                        <div className="w-full max-w-xs mx-auto flex">
                            <label htmlFor="funcionamento" className="block text-sm font-medium text-gray-700 mb-2">Funcionamento:</label>
                            <div className="mt-10 -ml-28">
                                {diasFuncionamento.map(day => (
                                    <div key={day} className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={day}
                                                name="funcionamento"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                value={day}
                                                checked={restaurante.funcionamento.includes(day)}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor={day} className="font-medium text-gray-700">{day}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <label htmlFor="pagamento" className="block mt-16 text-sm font-medium text-gray-700 ml-12">Formas de Pagamento:</label>
                            <div className=" mt-14">
                                {formasPagamento.map(form => (
                                    <div key={form} className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={form}
                                                name="pagamento"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                value={form}
                                                checked={restaurante.pagamento.includes(form)}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor={form} className="font-medium text-gray-700">{form}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <label htmlFor='avaliacao' className='block text-sm font-medium text-gray-700'>Avaliação:</label>
                        <input type="text" name="avaliacao" id="avaliacao" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />


                        <label htmlFor='data' className='block text-sm font-medium text-gray-700'>Data:</label>
                        <input type="text" name="data" id="data" onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cadastrar Restaurante
                        </button>
                    </div>
                </form>
            </div>
            {/*Exibir os restaurantes criados*/}
            <div>
                <h2>Restaurantes Cadastrados</h2>
                <ul>
                    {restaurantes.map((restaurante) => (
                        <div key={restaurante._id}>
                            <li>{restaurante.nome}</li>
                            <li>{restaurante.img}</li>
                            <li>{restaurante.loc}</li>
                            <li>{restaurante.valor}</li>
                            <li>{restaurante.tipo}</li>
                            <li>{restaurante.chefe}</li>
                            <li>{restaurante.descricao}</li>
                            <li>{restaurante.funcionamento}</li>
                            <li>{restaurante.pagamento}</li>
                            <li>{restaurante.avaliacao}</li>
                            <li>{restaurante.data}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default CadastroRestaurante;
