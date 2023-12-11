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
    //array de categorias de filtros
    const [contatos, setContatos] = useState([]);
    //o estado contatos serve para armazenar os contatos que serão exibidos na tela
    const [aberto, setAberto] = useState(false);
    //o estado aberto serve para verificar se o menu de filtros está aberto ou não
    const [selectedContato, setSelectedContato] = useState(null);
    //o estado selectedContato serve para observar se tem algum contato selecionado
    const [resposta, setResposta] = useState('');
    //o estado resposta serve para  exibir a resposta do contato selecionado
    const [isResponding, setIsResponding] = useState(false);
    //o estado isResponding serve para  exibir o campo de resposta
    const [respondedContatos, setRespondedContatos] = useState([]);
    // o estado respondedContatos serve para armazenar os contatos que já foram respondidos
    const formRef = React.useRef(null);

    const handleChange = (e) => {
        //serve para alterar o estado de acordo com o que é digitado nos inputs
        setContato({ ...contato, [e.target.name]: e.target.value });
    };

    const abrir = () => {
        //serve para abrir o menu de filtros
        if (aberto) {
            setAberto(false);
            // se o menu estiver aberto, ele será fechado
        }
        else {
            setAberto(true);
            // se o menu estiver fechado, ele será aberto
        }
    }

    const handleResponseChange = (e) => {
        //serve para alterar o estado de acordo com o que é digitado no input de resposta
        setResposta(e.target.value);
    };

    const handleSubmit = (e) => {
        // serve para enviar os dados do contato para o banco de dados e criar um novo contato
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
                //caso contrario, exibe o erro no console
                console.log(error);
            });
    }

    useEffect(() => {
        //serve para buscar os contatos no banco de dados e armazenar no estado contatos
        axios.get('/api/contatos')
            .then((response) => {
                setContatos(response.data.filter(contato => !contato.resposta));
                setRespondedContatos(response.data.filter(contato => contato.resposta));
            })
            .catch((error) => {
                //caso contrario, exibe o erro no console
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        //serve para deletar um contato do banco de dados
        axios.delete(`/api/contatos/${id}`)
            .then((response) => {
                setContatos(contatos.filter((contato) => contato.id !== id));
                setRespondedContatos(respondedContatos.filter((contato) => contato.id !== id));
            })
            .catch((error) => {
                //caso contrario, exibe o erro no console
                console.log(error);
            });
    }

    const handleResponseSubmit = (id) => {
        //serve para enviar a resposta do contato para o banco de dados
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
                //caso contrario, exibe o erro no console
                console.log(error);
            });
    };
    return (
        <>
            {/* Cabeçalho da pagina*/}
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-lbronze">Mensagens</h1>
                </div>

                <div className="flex flex-col justify-center items-center">

                    <table className="table-fixed">
                        <tbody>
                            {/* serve para exibir os contatos na tela*/}
                            <div className="flex flex-wrap justify-center items-center">
                                {
                                    contatos.map((contato) => (
                                        //serve para selecionar um contato e transformar em um card
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
                    {/* serve para exibir os contatos que já foram respondidos na tela*/}
                    <h1 className="text-4xl font-bold text-lbronze">Mensagens Respondidas</h1>
                    <p className="text-xl text-lbronze">Aqui estão as mensagens que foram respondidas.</p>
                    <div className="flex flex-wrap justify-center items-center">
                        {
                            respondedContatos.map((contato) => (
                                // seve para selecionar as informaçoes de um card ja criado podendo excluilo
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