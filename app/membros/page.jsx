'use client';
//Importando os módulos necessários
import Header from "../components/Header";
import axios from 'axios';
import Footer from "../components/Footer";
import React from "react";
import { useState, useEffect } from "react";
import ErrorPopup from "../components/ErrorPopUp";
import MemberForm from "../components/MembroForm";
import MembroCard from "../components/MembroCard";

//Definindo o componente Membros
function Membros() {

    const [membro, setMembro] = useState({
        nome: '',
        idade: '',
        posicao: '',
        descricao: '',
        senha: '',
    });

    //Definindo o estado inicial para membros, editando, selecionado e erros
    const [membros, setMembros] = useState([]);
    const [editando, setEditando] = useState(false);
    const [selecionado, setSelecionado] = useState(null);
    const [error, setErrors] = useState([]); // New state for error message
    const [isLoading, setIsLoading] = useState(false);

    //Função para lidar com a mudança nos campos do formulário
    const formRef = React.useRef(null);

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (e) => {
        setMembro({ ...membro, [e.target.name]: e.target.value });
    }

    // Função para lidar com o envio do formulário
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
            setErrors(null); // Limpar a mensagem de erro em caso de operação bem-sucedida
        } catch (error) {
            if (error.response && error.response.data && error.response.data.erros) {
                setErrors(error.response.data.erros);
                console.log(error.response.data.erros);
            } else {
                setErrors(['Ocorreu um erro ao enviar o formulário.']);
            }
        }
    }

    //useEffect para renderizar a página novamente quando o componente é montado
    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/membros')
            .then((response) => {
                setMembros(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    // Função para lidar com a exclusão de um membro
    const handleDelete = async (id) => {

        try {
            await axios.delete(`/api/membros/${id}`);
            setMembros(membros.filter(membro => membro.id !== id));
        } catch (erro) {
            console.error(erro);
        }
    };

    //Funça7o para lidar com a edição de um membro preenchendo o formulário com os dados do membro selecionado
    const handleEdit = (membro) => {
        setEditando(true);
        setSelecionado(membro);
        setMembro(membro);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Função para lidar com a atualização de um membro
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

    // Função para lidar com a exclusão de um membro
    function LoadingComponent() {
        return <img src='/loading1.webp' alt='Loading' className='w-1/2 mx-auto mt-5' />;
    }

    // Renderizando o componente
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
                    {
                        isLoading &&

                        <div className='flex flex-col items-center justify-center min-h-screen mx-auto bg-slate-900 '>
                            <p className='text-2xl text-lbronze'>Carregando...</p>
                            <LoadingComponent />
                        </div>
                    }
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