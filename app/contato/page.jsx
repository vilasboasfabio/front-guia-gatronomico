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

    return (
        <>
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-white">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl mt-10 font-bold uppercase mx-auto">Contato</h1>

                </div>
                <div className="flex  justify-center mt-10 items-center">
                    <ContactForm contato={contato} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="flex flex-col justify-center items-center bg-lbronze rounded-lg p-4 mt-6">
                    <a href="/loginrespondercontatos"  >Área dos diretores</a>

                </div>

            </div>

            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />
        </>
    )


}

export default Contato;