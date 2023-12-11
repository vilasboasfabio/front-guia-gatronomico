'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import ContactForm from '../components/ContatosForm';
import Header from '../components/Header';

function Contato() {

    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    // array de contatos
    const [contatos, setContatos] = useState([]);// O estado para controlar o array contatos
    const [aberto, setAberto] = useState(false);// O estado aberto serve para controlar o menu mobile
    const [selectedContato, setSelectedContato] = useState(null);// O estado para controlar o contato selecionado
    const [resposta, setResposta] = useState('');// O estado para controlar a resposta
    const [isResponding, setIsResponding] = useState(false);// O estado para controlar se está respondendo ou não
    const [respondedContatos, setRespondedContatos] = useState([]);// O estado para controlar os contatos respondidos

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
        // atualiza o estado de contato com o valor do input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // atualiza o estado de contatos com o novo contato
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
        // atualiza o estado de contatos com os contatos da API
        axios.get('/api/contatos')
            .then((response) => {
                setContatos(response.data.filter(contato => !contato.resposta));
                setRespondedContatos(response.data.filter(contato => contato.resposta));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {/* componentes do cabeçalho*/}
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-white">
                <div className="flex flex-col justify-center items-center">
                    {/* titulo da página*/}
                    <h1 className="text-4xl mt-10 font-bold uppercase mx-auto">Contato</h1>

                </div>
                <div className="flex  justify-center mt-10 items-center">
                    {/*  formulário de contato*/}
                    <ContactForm contato={contato} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="flex flex-col justify-center items-center bg-lbronze rounded-lg p-4 mt-6">
                    {/*  lista de contatos*/}
                    <a href="/loginrespondercontatos"  >Área dos diretores</a>

                </div>

            </div>

            <hr className='bg-lbronze h-2 -mt-1' />
            {/* rodapé*/}
            <Footer />
        </>
    )


}

export default Contato;