import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import imagens1 from "../../../../public/transição1.png";
import imagens2 from "../../../../public/transição2.png";
import imagens3 from "../../../../public/transição3.png";

interface Transicao_divProps {
  escolha: number;
}

const listatransicoes = [
  {
    elemento: <Image src={imagens1} alt='ondas de transição' width={2000} />,
    key: 1,
  },
  {
    elemento: <Image src={imagens2} alt='ondas de transição' width={2000} />,
    key: 2,
  },
  {
    elemento: <Image src={imagens3} alt='ondas de transição' width={2000} />,
    key: 3,
  },
];

export default function Transicao_div(props: Transicao_divProps) {
  const { escolha } = props;
  const transicaoSelecionada = listatransicoes.find(transicao => transicao.key === escolha);

  if (!transicaoSelecionada) {
    return null;
  }

  return <div>{transicaoSelecionada.elemento}</div>;
}