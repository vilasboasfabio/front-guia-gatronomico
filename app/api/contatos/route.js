import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "contatos";// caminho usado para facilitar o uso da api

export async function GET() {
    // funcao de listar todos
    try {
        const resposta = await axios.get(url);
        return NextResponse.json(resposta.data);
    } catch (erro) {
        console.log("[Contatos_Get]", erro);// Verificar se o erro é um erro de resposta da API (como um erro 404)
        if (erro.response) {
        if (erro.response.status === 400) {
            return NextResponse.json(erro.response.data, { status: 400 });
        }
        }// Se for outro tipo de erro de resposta, você pode adicionar tratamentos adicionais aqui
        return new NextResponse("Erro do servidor dentro do route", {
        status: 500,
        });// Para erros que não são de resposta da API, retorna um erro 500
    }
    }

export async function POST(request) {
    // funcao de criar
    const parametros = await request.json();
    try {
        const resposta = await axios.post(url, parametros);
        return NextResponse.json(resposta.data);
    } catch (error) {
        console.log("[Contatos_Post]", error);
        if (error.response && error.response.data) {
        return new NextResponse(JSON.stringify(error.response.data), {
            status: error.response.status,
        });// Retorna o erro de forma que o frontend possa capturá-lo
        } else {
        return new NextResponse("Erro do servidor dentro do route", {
            status: 500,
        });// Para erros que não são de resposta da API, retorna um erro 500
        }
    }
    }

