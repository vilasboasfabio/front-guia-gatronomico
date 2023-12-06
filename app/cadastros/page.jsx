'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCard from '../components/CardRestaurante';
import RestauranteForm from '../components/RestauranteForm';
import CardDetalhesRestaurante from '../components/CardDetalhesRestaurante';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CadastroRestaurante() {
    const [restaurante, setRestaurante] = useState({
        nome: '',
        img: '',
        loc: '',
        valor: '',
        tipo: '',
        chefe: '',
        descricao: '',
        funcionamento: [],
        pagamento: [],
        avaliacao: '',
        data: ''
    });
    const [restaurantes, setRestaurantes] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingRestaurante, setEditingRestaurante] = useState(null);
    const [errors, setErrors] = useState([]);
    const [aberto , setAberto] = useState(false);
    const [selectedRestaurante, setSelectedRestaurante] = useState(null);

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setRestaurante({ ...restaurante, [e.target.name]: e.target.value });
    };

    const abrir = () => {
        if (aberto) {
            setAberto(false);
        }
        else {
            setAberto(true);
        }
    }

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        let newSelection;

        if (name === "funcionamento") {
            newSelection = restaurante.funcionamento.includes(value)
                ? restaurante.funcionamento.filter(day => day !== value)
                : [...restaurante.funcionamento, value];
        } else if (name === "pagamento") {
            newSelection = restaurante.pagamento.includes(value)
                ? restaurante.pagamento.filter(form => form !== value)
                : [...restaurante.pagamento, value];
        }

        setRestaurante({ ...restaurante, [name]: newSelection });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosFormatados = {
            ...restaurante,
            valor: Number(restaurante.valor),
            avaliacao: Number(restaurante.avaliacao)
        };
    
        if (isEditing) {
            handleEdit(editingRestaurante, dadosFormatados);
        } else {
            try {
                const response = await axios.post('/api/restaurantes', dadosFormatados);
                setRestaurante({
                    nome: '',
                    img: '',
                    loc: '',
                    valor: '',
                    tipo: '',
                    chefe: '',
                    descricao: '',
                    funcionamento: [],
                    pagamento: [],
                    avaliacao: '',
                    data: ''
                });
                setErrors([]);
            } catch (error) {
                if (error.response && error.response.data && error.response.data.erros) {
                    setErrors(error.response.data.erros);
                } else {
                    setErrors(['Ocorreu um erro ao enviar o formulário.']);
                }
            }
        }
    };

    const handleEdit = async (id, updatedRestaurante) => {
        const valorNumerico = Number(updatedRestaurante.valor);
        const avaliacaoNumerica = Number(updatedRestaurante.avaliacao);
    
        if (isNaN(valorNumerico) || isNaN(avaliacaoNumerica)) {
            setErrors(['Valor e avaliação devem ser números.']);
            return;
        }
    
        const dadosFormatados = {
            ...updatedRestaurante,
            valor: valorNumerico,
            avaliacao: avaliacaoNumerica
        };
    
        try {
            await axios.put(`/api/restaurantes/${id}`, dadosFormatados);
            const response = await axios.get('/api/restaurantes');
            setRestaurantes(response.data);
            setIsEditing(false);
            setRestaurante({
                nome: '',
                img: '',
                loc: '',
                valor: '',
                tipo: '',
                chefe: '',
                descricao: '',
                funcionamento: [],
                pagamento: [],
                avaliacao: '',
                data: ''
            });
        } catch (error) {
            console.error('Erro ao atualizar o restaurante:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/restaurantes/${id}`);
            setRestaurantes(restaurantes.filter(restaurante => restaurante.id !== id));
        } catch (erro) {
            console.error(erro);
        }
    };

    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const response = await axios.get('/api/restaurantes');
                setRestaurantes(response.data);
            } catch (error) {
                console.error('Erro ao buscar restaurantes', error);
            }
        };

        fetchRestaurantes();
    }, [restaurante]);

    
    const editInputs = (id) => {
        const restauranteEdit = restaurantes.find(restaurante => restaurante.id === id);
        setRestaurante(restauranteEdit);
        setIsEditing(true);
        setEditingRestaurante(id);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
       <main className='bg-slate-900'>
        <Header />
        <hr className='bg-lbronze h-2 -mt-1' />
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 sm:px-6 lg:px-8 mb-10">
        <div className="space-y-8 w-screen bg-image-1 bg-slate-900">
        <h2 className="text-3xl mt-10 font-bold text-center text-white mb-8 ">Cadastro de Restaurante</h2>
          <div className=' mx-auto mt-24 mb-20 opacity-1'>
            <RestauranteForm
              restaurante={restaurante}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
              handleSubmit={handleSubmit}
              errors={errors}
              isEditing={isEditing}
              handleEdit={handleEdit}
              formRef={formRef}
            />
                </div>


                {errors.length > 0 && (
                    <div>
                        {
                            errors.map((error) => (
                                <div key={error} className="text-red-500 text-xs italic">
                                    {error}
                                </div>
                            ))
                        }
                    </div>
                )}
                {
                    errors.length > 0 && (
                        setTimeout(() => {
                            setErrors([]);
                        }, 4000)
                    )
                }

            </div>

            <div className="flex flex-col border-t-bronze items-center justify-center min-h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-900 py-2 lg:px-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Restaurantes Cadastrados</h2>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                      //se estiver aberto mostra o card de detalhes
                        aberto ?  <CardDetalhesRestaurante restaurante={selectedRestaurante} abrir={abrir} /> 
                        :
                        //se não mostra o card normal
                        restaurantes.map(restaurante => (

                            <RestauranteCard
                            key={restaurante.id}
                            restaurante={restaurante}
                            onDelete={handleDelete}
                            onEdit={editInputs}
                            abrir={() => {
                              setSelectedRestaurante(restaurante);
                              abrir();
                            }}
                          />

                        ))

                    }
                </ul>
            </div>


        </div>
        <hr className='bg-lbronze h-2 -mt-1' />
        <Footer />
       </main>
    );



}

export default CadastroRestaurante;