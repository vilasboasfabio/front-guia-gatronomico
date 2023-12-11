import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "contatos";

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();

  try {
      const response = await axios.put(`${url}/${id}`, body);
      return NextResponse.json(response.data);
  } catch (error) {
      console.log("[Order_Post]", error);
      if (error.response && error.response.data) {
          // Adicione os erros ao estado do componente
          setErrors(error.response.data);
          // Retorna o erro de forma que o frontend possa capturá-lo
          return new NextResponse(JSON.stringify(error.response.data), { status: error.response.status });
      } else {
          // Adicione o erro ao estado do componente
          setErrors(["Erro do servidor dentro do route"]);
          return new NextResponse("Erro do servidor dentro do route", {status: 500});
      }
  }
}

export async function DELETE(request, { params }) {
    const { id } = params;
    try {
      const response = await axios.delete(`${url}/${id}`);
  
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_DELETE]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }

