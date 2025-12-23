'use client'

import { Produtos } from "@/src/types/produto";
import { useEffect, useState } from "react";

export default function Home() {

  const [produtos, setProdutos] = useState<Produtos[]>([])

  async function obterProdutos() {

    try {
      const resp = await fetch('http://localhost:3001/produtos')
      if (!resp.ok) throw new Error('Erro ao buscar Produtos')

      const dados: Produtos[] = await resp.json()
      setProdutos(dados)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    obterProdutos()
  }, [])

  return (

    <>
      {produtos.map((produtos) =>
        <div key={produtos.id}>
          <p>{produtos.nome}</p>
          <p>{produtos.preco}</p>
        </div>
      )}
    </>
  );
}
