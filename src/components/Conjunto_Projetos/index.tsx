import React from 'react'
import styles from './index.module.css'
import Transicao_div from './Transicao_div'
import Monstruarios from './Monstruarios'

export default function Conjunto_Projetos() {
  return (
    <div className={styles.divgeral}>
      <Transicao_div escolha={1} />
      <Monstruarios />
      <Transicao_div escolha={2} />
    </div>
  )
}
