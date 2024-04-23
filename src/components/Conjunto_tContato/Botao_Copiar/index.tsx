'use client'
import React, { useState } from 'react'

import styles from './index.module.css'

export default function Botao_Copiar() {
  const [copiado, setCopiado] = useState(false)
  const [text, setText] = useState('COPIAR EMAIL')

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText('lucaspcosta70@gmail.com')
    setCopiado(true) // Define o estado como true quando o texto é copiado
    setText('EMAIL COPIADO!')
    setTimeout(() => {
      setCopiado(false) // Restaura o estado para false após 3 segundos
      setText('COPIAR EMAIL')
    }, 2000)
  }

  return (
    <div>
      <div className={styles.tudo}>
        <div
          style={{
            ...(copiado && {
              backgroundColor: 'var(--verde)',
            }),
          }}
        >
          Lucaspcosta70@gmail.com
        </div>
        <button onClick={copyTextToClipboard}>{text}</button>
      </div>
    </div>
  )
}
