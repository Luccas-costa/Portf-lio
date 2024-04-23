import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import imagem from '../../../../public/caixa_de_correio.png'

export default function Chamada_Email() {
  return (
    <div>
      <div className={styles.arrumatudo}>
        <Image src={imagem} alt="caixa de correio" />
        <h1 className={styles.texto}>Me mande um email</h1>
      </div>
    </div>
  )
}
