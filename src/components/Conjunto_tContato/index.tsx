/* eslint-disable camelcase */
import React from 'react'
import styles from './index.module.css'
import Chamada_Email from './Chamada_Email'
import Botao_Copiar from './Botao_Copiar'

export default function Conjunto_tContato() {
  return (
    <div className={styles.todo}>
      <div className={styles.arrumacao}>
        <Chamada_Email />
        <Botao_Copiar />
      </div>
    </div>
  )
}
