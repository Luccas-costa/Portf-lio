"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

interface IconesProps {
  link: string;
  imagem: string;
  social: string;
}

export default function Icones(props: IconesProps) {
  const [copiado, setCopiado] = useState(false); // Estado para controlar a visibilidade do h1 e as mudanças de estilo

  const hasLink = props.link !== "";

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText("lucaspcosta70@gmail.com");
    setCopiado(true); // Define o estado como true quando o texto é copiado
    setTimeout(() => {
      setCopiado(false); // Restaura o estado para false após 3 segundos
    }, 2000);
  };

  return (
    <div
      className={styles.moldura}
      style={{
        ...(copiado && {
          backgroundColor: "var(--verde)",
        }),
      }}
    >
      {hasLink ? (
        <a href={props.link} target='_blank'>
          <Image src={props.imagem} alt={props.social} width={86} />
        </a>
      ) : (
        <>
          {copiado && (
            <h1 className={styles.copiado} style={{ color: "var(--verde)" }}>
              COPIADO
            </h1>
          )}{" "}
          {/* Renderiza o h1 apenas quando copiado é verdadeiro */}
          <Image
            src={props.imagem}
            alt={props.social}
            width={86}
            onClick={copyTextToClipboard}
            style={{
              cursor: "pointer",
            }}
          />
        </>
      )}
    </div>
  );
}
