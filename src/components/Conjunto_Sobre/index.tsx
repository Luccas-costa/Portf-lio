import React from 'react'
import styles from './index.module.css'
import Sobre_Mim from './Sobre_Mim'
import Foto_Perfil from './Foto_Perfil'
import Transicao_div from '../Conjunto_Projetos/Transicao_div'

const Conjunto_Sobre = () => {
  return (
    <div className={styles.divgeral}>
      <div className={styles.divsobre}>
        <Sobre_Mim />
        <Foto_Perfil />
      </div>
      <Transicao_div escolha={3} />
    </div>
  )
}
export default Conjunto_Sobre
