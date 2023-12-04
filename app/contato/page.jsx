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
    </>
   )
                    

}

export default Contato;