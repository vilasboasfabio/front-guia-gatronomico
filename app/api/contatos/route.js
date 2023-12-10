import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "contatos";

export async function GET() {
    try {
        const resposta = await axios.get(url);
        return NextResponse.json(resposta.data);
    } catch (erro) {
        console.log("[Contatos_Get]", erro);
        if (erro.response) {
        if (erro.response.status === 400) {
            return NextResponse.json(erro.response.data, { status: 400 });
        }
        }
        return new NextResponse("Erro do servidor dentro do route", {
        status: 500,
        });
    }
    }

export async function POST(request) {
    const parametros = await request.json();
    try {
        const resposta = await axios.post(url, parametros);
        return NextResponse.json(resposta.data);
    } catch (error) {
        console.log("[Contatos_Post]", error);
        if (error.response && error.response.data) {
        return new NextResponse(JSON.stringify(error.response.data), {
            status: error.response.status,
        });
        } else {
        return new NextResponse("Erro do servidor dentro do route", {
            status: 500,
        });
        }
    }
    }

