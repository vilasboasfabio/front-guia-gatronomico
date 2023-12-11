import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "restaurante";

export async function GET(request, { params }) {
  // funcao de listar por id
    const { id } = params;
    // params é um objeto que contém todos os parâmetros da rota
  
    try {
      const response = await axios.get(`${url}/${id}`);
  
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_GET]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
      // Retorna o erro de forma que o frontend possa capturá-lo
    }
  }

  export async function PUT(request, { params }) {
    // funcao de atualizar por id
    const { id } = params;
    const body = await request.json();
  
    try {
      const response = await axios.put(`${url}/${id}`, body);
    
  
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[Order_Post]", error);
      if (error.response && error.response.data) {
          // Retorna o erro de forma que o frontend possa capturá-lo
          return new NextResponse(JSON.stringify(error.response.data), { status: error.response.status });
      } else {
          return new NextResponse("Erro do servidor dentro do route", {status: 500});
      }
    }
  }

  export async function DELETE(request, { params }) {
    // funcao de deletar
    const { id } = params;
    try {
      const response = await axios.delete(`${url}/${id}`);
  
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_DELETE]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }