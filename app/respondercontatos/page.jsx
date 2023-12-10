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
                setRespondedContatos(respondedContatos.filter((contato) => contato.id !== id));
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
                    <h1 className="text-4xl font-bold text-lbronze">Mensagens</h1>
                </div>

                <div className="flex flex-col justify-center items-center">
                 
                            <table className="table-fixed">
                                <tbody>
                                    <div className="flex flex-wrap justify-center items-center">
                                        {
                                            contatos.map((contato) => (
                                                <div key={contato.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                                                    <div className="px-6 py-4">
                                                        <div className="font-bold text-xl mb-2">{contato.nome}</div>
                                                        <p className="text-gray-700 text-base">
                                                            {contato.mensagem}
                                                        </p>
                                                    </div>
                                                    <div className="px-6 pt-4 pb-2">
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email: {contato.email}</span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Telefone: {contato.telefone}</span>
                                                    </div>
                                                    <div className="px-6 pt-4 pb-2">
                                                        {
                                                            selectedContato === contato.id ? (
                                                                <input type="text" value={resposta} onChange={handleResponseChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-lbronze focus:border-gray-500" />
                                                            ) : null
                                                        }
                                                        {
                                                            selectedContato === contato.id ? (
                                                                <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleResponseSubmit(contato.id)}>
                                                                    Enviar
                                                                </button>
                                                            ) : (
                                                                <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => { setIsResponding(true); setSelectedContato(contato.id) }}>
                                                                    Responder
                                                                </button>
                                                            )
                                                        }
                                                        <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(contato.id)}>
                                                            Excluir
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </tbody>

                            </table>
                     
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-lbronze">Mensagens Respondidas</h1>
                    <p className="text-xl text-lbronze">Aqui estão as mensagens que foram respondidas.</p>
                    <div className="flex flex-wrap justify-center items-center">
                        {
                            respondedContatos.map((contato) => (
                                <div key={contato.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{contato.nome}</div>
                                        <p className="text-gray-700 text-base">
                                            {contato.mensagem}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email: {contato.email}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Telefone: {contato.telefone}</span>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <p><strong>Resposta:</strong> {contato.resposta}</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <button className="bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(contato.id)}>
                                            Excluir
                                        </button>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )


}

export default Contato;