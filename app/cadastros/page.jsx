'use client';
console.log('CadastroRestaurante.jsx');
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCard from '../components/CardRestaurante';

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
    const [isEditing, setIsEditing] = useState(false);
    const [editingRestaurante, setEditingRestaurante] = useState(null);
    const [error, setError] = useState(null);

    const formRef = React.useRef(null);


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
            console.log(dadosFormatados)
            const response = await axios.post('/api/restaurantes', dadosFormatados);
            console.log('response', response);
            console.log('Restaurante cadastrado:', response.data);
            console.log(dadosFormatados);
            setRestaurante({
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
        } catch (error) {
            console.log(error)
            console.error('Erro ao enviar o formulário', error);
        }

    };

    const handleEdit = async (id, updatedRestaurante) => {
        try {
            const response = await axios.put(`/api/restaurantes/${id}`, updatedRestaurante);
            setRestaurantes(restaurantes.map(restaurante =>
                restaurante.id === id ? response.data : restaurante
            ));
            setIsEditing(false);
            setRestaurante({
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
        } catch (error) {
            console.error('Erro ao atualizar o restaurante:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/restaurantes/${id}`);
            setRestaurantes(restaurantes.filter(restaurante => restaurante.id !== id));
        } catch (erro) {
            console.error(erro);
        }
    };

    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const response = await axios.get('/api/restaurantes');
                setRestaurantes(response.data);
            } catch (error) {
                console.error('Erro ao buscar restaurantes', error);
            }
        };

        fetchRestaurantes();
    }, [restaurante]);

    const editInputs = (id) => {
        const restauranteEdit = restaurantes.find(restaurante => restaurante.id === id);
        setRestaurante(restauranteEdit);
        setIsEditing(true);
        setEditingRestaurante(id);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Cadastro de Restaurantes</h2>
                <form className="mt-8 space-y-6" ref={formRef}>

                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={restaurante.nome}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            name="img"
                            value={restaurante.img}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="localizacao">Localização:</label>
                        <input
                            type="text"
                            id="localizacao"
                            name="loc"
                            value={restaurante.loc}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="valor">Valor:</label>
                        <input
                            type="text"
                            id="valor"
                            name="valor"
                            value={restaurante.valor}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="tipo">Tipo:</label>
                        <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            value={restaurante.tipo}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="chefe">Chefe:</label>
                        <input
                            type="text"
                            id="chefe"
                            name="chefe"
                            value={restaurante.chefe}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="descricao">Descrição:</label>
                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            value={restaurante.descricao}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

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
                        <label htmlFor="avaliacao">Avaliação:</label>
                        <input
                            type="number"
                            id="avaliacao"
                            name="avaliacao"
                            value={restaurante.avaliacao}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />

                        <label htmlFor="data">Data:</label>
                        <input
                            type="date"
                            id="data"
                            name="data"
                            value={restaurante.data}
                            onChange={handleChange}
                            className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        />
                    </div>
                    <div>
                        {
                            isEditing
                                ? <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => handleEdit(restaurante.id, restaurante)}>Atualizar</button>
                                : <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleSubmit}>Cadastrar</button>
                        }
                    </div>
                </form>

            </div>

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-6 lg:px-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Restaurantes Cadastrados</h2>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {restaurantes.map((restaurante) => (
                        restaurante.id !== editingRestaurante && (
                            <RestauranteCard key={restaurante.id} restaurante={restaurante} onEdit={editInputs} onDelete={handleDelete} />
                        )
                    ))}
                </ul>
            </div>


        </div>
    );



}

export default CadastroRestaurante;
