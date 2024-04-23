import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import imagem from "../../../../public/escrita_sobre.png";

export default function Sobre_Mim() {
  return (
    <div className={styles.tudo}>
      <Image src={imagem} alt='escrita' />
      <h1 className={styles.nome}>LUCCAS COSTA</h1>
      <p className={styles.paragrafo}>
        Meu nome é Luccas, atualmente residindo em São Paulo. Sou um entusiasta
      </p>
      <p>
        apaixonado por programação, especialmente em sua vertente de Frontend.
        Ao longo
      </p>
      <p>
        {" "}
        dos anos, tenho me dedicado a uma ampla gama de tecnologias, aprimorando
        minhas
      </p>
      <p>
        {" "}
        habilidades em áreas como{" "}
        <span>React, Next.js, HTML, CSS, JavaScript, Node.js,Tailwind, </span>
      </p>
      <p>
        <span> Python e C#</span>. Busco incessantemente a excelência em tudo o
        que empreendo.
      </p>
      <p className={styles.paragrafo}>
        Você pode me encontrar no <span>GitHub</span>, onde gosto de desenvolver
        e compartilhar
      </p>
      <p>
        uma variedade de onde gosto projetos pessoais. Estou constantemente
        buscando expandir
      </p>
      <p>minhas habilidades e horizontes.</p>
      <p className={styles.paragrafo}>
        Atualmente, estou focado em aprofundar meu conhecimento conhecimento em
        React
      </p>
      <p>
        <span> Native</span> <span>TypeScript</span>, visando, em seguida, uma
        especialização no desenvolvimento <span>Backend</span>.
      </p>
      <p>
        Estou empolgado com as possibilidades que o futuro reserva e estou
        sempre aberto a
      </p>
      <p>novos desafios e oportunidades de aprendizado.</p>
    </div>
  );
}
