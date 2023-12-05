'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";

import Header from '../components/Header';

function Contato() {

    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [contatos, setContatos] = useState([]);
    const [aberto, setAberto] = useState(false);
    const [selectedContato, setSelectedContato] = useState(null);
    const [resposta, setResposta] = useState('');
    const [isResponding, setIsResponding] = useState(false);
    const [respondedContatos, setRespondedContatos] = useState([]);

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

    const handleResponseChange = (e) => {
        setResposta(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/contatos', contato)
            .then((response) => {
                setContatos(prevContatos => [...prevContatos, response.data]);
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
                setContatos(response.data.filter(contato => !contato.resposta));
                setRespondedContatos(response.data.filter(contato => contato.resposta));
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

    const handleResponseSubmit = (id) => {
        axios.put(`/api/contatos/${id}`, { resposta })
            .then((response) => {
                const updatedContato = contatos.find((contato) => contato.id === id);
                updatedContato.resposta = resposta;
                setRespondedContatos([...respondedContatos, updatedContato]);
                setContatos(contatos.filter((contato) => contato.id !== id));
                setResposta('');
                setSelectedContato(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                <div className="flex flex-col justify-center items-center bg-slate-900 rounded-lg p-4 mt-6">
                 
                   
                   <h3 className='
                     text-4xl font-bold text-lbronze
                   '>Área do Membro</h3>
                   <a href="/respondercontatos" className=" bg-slate-400 rounded-lg p-1 mt-2 hover:bg-slate-700 hover:text-white text-black" >Responder Contatos</a>

                </div>
               
            </div>
            <Footer />
        </>
    )


}

export default Contato;