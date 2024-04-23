import styles from './index.module.css'
import imagens from '../../../public/images'
import Cabecario from './Cabecario'
import Icones from './Icones'

export default function Conjunto_Apresentacao() {
  return (
    <div className={styles.degrade}>
      <div>
        <Cabecario />
        <div className={styles.alinhamento_apresentacao}>
          <div className={styles.txt_mini}>OLÁ 👋 EU SOU O LUCCAS</div>
          <div className="flex">
            <div className={styles.txt_apresentacao}>REACT</div>
            <Icones
              imagem={imagens[0].img1}
              social="GitHub"
              link="https://github.com/Luccas-costa"
            />
            <Icones
              imagem={imagens[2].img3}
              social="instagram"
              link="https://www.instagram.com/l1uccas/"
            />
            <Icones imagem={imagens[1].img2} social="gmail" link="" />
          </div>
          <div className={styles.txt_apresentacao}>DEVELOPER</div>
          <div className={styles.txt_mini_inferior1}>
            TENHO 17 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE
          </div>
          <div className={styles.txt_mini_inferior2}>
            EXPERIENCIA TRABALHANDO COMO NADA AINDA
          </div>
        </div>
      </div>
    </div>
  )
}
