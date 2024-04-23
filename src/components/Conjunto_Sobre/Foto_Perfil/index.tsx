import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import imagem from "../../../../public/FotoDePerfil.jpg";

export default function Foto_Perfil() {
  return (
    <div>
      <Image
        src={imagem}
        alt='foto de perfil'
        className={styles.foto}
        width={550}
      />
    </div>
  );
}
