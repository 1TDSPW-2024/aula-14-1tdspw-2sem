"use client";
import { TipoLanche } from "@/types";
import { ReactNode, useEffect, useState } from "react";


export default function Produto({ params }: {
  params: {
    nome: ReactNode; id: number
  }
}) {

  const [produt, setProdut] = useState<TipoLanche>();

  useEffect(() => {
    const chamadaDaApi = async () => {
      const response = await fetch(`http://localhost:3000/api/base-route/${params.id}`)
      const dados = await response.json()
      setProdut(dados)

    };

    chamadaDaApi();
  }, [])

  if (produt) {
    return (
      <div>
        <h1>Produto</h1>

        <p>ID: {params.id}</p>
        <p>Nome: {produt.nome}</p>


      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Produto</h1>

        <p>ID: {params.id}</p>
        <p>Nome:PRODUTO INEXISTENTE!</p>


      </div>
    )
  }
}
