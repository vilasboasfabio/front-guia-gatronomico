'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";

import Header from '../components/Header';

function Contato() {

    const[contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [contatos, setContatos] = useState([]);
    const [aberto , setAberto] = useState(false);
    const [selectedContato, setSelectedContato] = useState(null);

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    };

    const abrir = () => {
        if (aberto) {
            setAberto(false);
        }
        else {
            setAberto(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/contatos', contato)
            .then((response) => {
                setContatos([...contatos, response.data]);
                setContato({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('/api/contatos')
            .then((response) => {
                setContatos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/contatos/${id}`)
            .then((response) => {
                setContatos(contatos.filter((contato) => contato.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

   return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-lbronze">Contato</h1>
            <p className="text-xl text-lbronze">Entre em contato conosco para tirar dúvidas, dar sugestões ou fazer reclamações.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
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
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-lbronze">Mensagens</h1>
            <p className="text-xl text-lbronze">Aqui estão as mensagens enviadas para o site.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={abrir}>
                {aberto ? 'Fechar' : 'Abrir'}
            </button>
        </div>

        <div className="flex flex-col justify-center items-center">
            {
                aberto ? (
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th className="w-1/4 px-4 py-2">Nome</th>
                                <th className="w-1/4 px-4 py-2">E-mail</th>
                                <th className="w-1/4 px-4 py-2">Telefone</th>
                                <th className="w-1/4 px-4 py-2">Mensagem</th>
                                <th className="w-1/4 px-4 py-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contatos.map((contato) => (
                                    <tr key={contato.id}>
                                        <td className="border px-4 py-2">{contato.nome}</td>
                                        <td className="border px-4 py-2">{contato.email}</td>
                                        <td className="border px-4 py-2">{contato.telefone}</td>
                                        <td className="border px-4 py-2">{contato.mensagem}</td>
                                        <td className="border px-4 py-2">
                                            <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(contato.id)}>
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <div></div>
                )
            }
        </div>
    </div>
    <Footer />
    </>
   )
                    

}

export default Contato;