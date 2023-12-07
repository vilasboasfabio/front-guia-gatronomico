'use client';
import Header from "../components/Header";
import axios from 'axios';
import Footer from "../components/Footer";
import React from "react";
import { useState, useEffect } from "react";

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
        } catch (erro) {
            console.error(erro);
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
        } catch (erro) {
            console.error(erro);
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
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <h1 className="text-4xl text-center font-bold mb-4">Membros</h1>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <form className="space-y-4 bg-white p-6 rounded shadow-md w-1/2 mx-auto" ref={formRef}>
                            <div className="flex flex-col">
                                <label htmlFor="nome" className="mb-2">Nome</label>
                                <input type="text" className="border p-2" id="nome" name="nome" value={membro.nome} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="idade" className="mb-2">Idade</label>
                                <input type="text" className="border p-2" id="idade" name="idade" value={membro.idade} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="posicao" className="mb-2">Posição</label>
                                <input type="text" className="border p-2" id="posicao" name="posicao" value={membro.posicao} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="descricao" className="mb-2">Descrição</label>
                                <input type="text" className="border p-2" id="descricao" name="descricao" value={membro.descricao} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="senha" className="mb-2">Senha</label>
                                <input type="text" className="border p-2" id="senha" name="senha" value={membro.senha} onChange={handleChange} />
                            </div>
                            {
                                editando ? (
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleUpdate(selecionado.id, membro)}>
                                        Atualizar
                                    </button>
                                ) : (
                                    <button className="bg-blue-500  text-white px-4 py-2 rounded" onClick={handleSubmit}>
                                        Cadastrar
                                    </button>
                                )
                            }
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap w-full h-full p-5">
                    {membros.map((membro) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={membro.id}>
                            <div className="border p-4 rounded shadow-md bg-white">
                                <div className="mb-4 ">
                                    <h5 className="text-2xl font-bold">{membro.nome} - {membro.posicao}</h5>
                                    <p className="text-sm mt-3">{membro.idade}</p>
                                    <p className="text-sm mt-3">{membro.descricao}</p>
                                    <p className="text-sm mt-3">{membro.senha}</p>
                                </div>
                                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleDelete(membro.id)}>Excluir</button>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleEdit(membro)}>Editar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Membros;