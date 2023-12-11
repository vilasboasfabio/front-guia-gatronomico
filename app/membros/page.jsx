'use client';
import Header from "../components/Header";
import axios from 'axios';
import Footer from "../components/Footer";
import React from "react";
import { useState, useEffect } from "react";
import ErrorPopup from "../components/ErrorPopUp";
import MemberForm from "../components/MembroForm";
import MembroCard from "../components/MembroCard";

function Membros() {

    const [membro, setMembro] = useState({
        nome: '',
        idade: '',
        posicao: '',
        descricao: '',
        senha: '',
    });

    const [membros, setMembros] = useState([]);
    const [editando, setEditando] = useState(false);
    const [selecionado, setSelecionado] = useState(null);
    const [error, setErrors] = useState([]); // New state for error message

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setMembro({ ...membro, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/membros', membro);
            setMembros([...membros, response.data]);
            setMembro({
                nome: '',
                idade: '',
                posicao: '',
                descricao: '',
                senha: '',
            });
            setErrors(null); // Clear error message on successful operation
        } catch (error) {
            if (error.response && error.response.data && error.response.data.erros) {
                setErrors(error.response.data.erros);
                console.log(error.response.data.erros);
            } else {
                setErrors(['Ocorreu um erro ao enviar o formulário.']);
            }
        }
    }

    useEffect(() => {
        axios.get('/api/membros')
            .then((response) => {
                setMembros(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const handleDelete = async (id) => {

        try {
            await axios.delete(`/api/membros/${id}`);
            setMembros(membros.filter(membro => membro.id !== id));
        } catch (erro) {
            console.error(erro);
        }
    };

    const handleEdit = (membro) => {
        setEditando(true);
        setSelecionado(membro);
        setMembro(membro);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleUpdate = async (id, updatedMembro) => {
        try {
            const response = await axios.put(`/api/membros/${id}`, updatedMembro);
            setMembros(membros.map(membro => (membro._id === id ? response.data : membro)));
            setMembro({
                nome: '',
                idade: '',
                posicao: '',
                descricao: '',
                senha: '',
            });
            setEditando(false);
            setSelecionado(null);

        } catch (error) {
            if (error.response && error.response.data && error.response.data.erros) {
                setErrors(error.response.data.erros);
                console.log(error.response.data.erros);
                setTimeout(() => setErrors(null), 5000); // Clear error message after 5 seconds
            } else {
                setErrors(['Ocorreu um erro ao enviar o formulário.']);
                setTimeout(() => setErrors(null), 5000); // Clear error message after 5 seconds
            }
        }
    }
    //useEffect para renderizar a página novamente quando o estado de restaurantes for alterado
    useEffect(() => {
        axios.get('/api/membros')
            .then((response) => {
                setMembros(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [membro]);




    return (
        <>
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />
            <ErrorPopup errors={error} />
            <div className="container lg:mx-20 mt-6 bg-slate-900 ">
                <div className="w-screen pt-10 lg:-ml-20 -mt-6 pb-8 justify-center bg-image4 ">

                    <div className="w-full mx-auto mb-6 lg:w-1/2">
                        <h1 className="text-4xl text-white text-center font-bold mb-4">Membros</h1>
                        <hr className="bg-lbronze h-1 w-1/4 mx-auto mb-6" />
                    </div>

                    <div className="flex flex-wrap">

                        <div className="lg:w-2/3 w-5/6 mx-auto" ref={formRef}>
                            <MemberForm
                                membro={membro}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                handleUpdate={handleUpdate}
                                editando={editando}
                                selecionado={selecionado}
                            />
                        </div>
                    </div>


                </div>
                <hr className="bg-lbronze lg:-ml-20 h-2 w-screen mb-6" />
                <div className="flex flex-wrap w-screen lg:-ml-20 -mt-6 pb-12 bg-slate-900 p-4">
                    {membros.map((membro) => (
                        <MembroCard membro={membro} handleDelete={handleDelete} handleEdit={handleEdit} />
                    ))}
                </div>
            </div>
            <hr className="bg-lbronze h-2 w-full" />
            <Footer />
        </>
    );
}

export default Membros;