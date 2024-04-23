import styles from "./index.module.css";
import Image from "next/image";
import imagens from "../../../../public/images";

export default function Cabecario() {
  return (
    <header className={styles.cabecario}>
      <div className='flex justify-between'>
        <Image
          src={imagens[3].img4}
          alt='Logo portifolio'
          width={50}
          className={styles.logo}
        />

        <div className='relative'>
          <ul className={styles.ulcabecario}>
            <li className='relative top-2.5 text-branco'>Sobre</li>
            <li className='relative top-2.5 text-branco'>Settings</li>
            <li className='relative top-2.5 text-branco'>Contato</li>
            <Image
              src={imagens[4].img5}
              alt='Bandeira do Brasil'
              width={50}
              className='rounded-full relative top-1'
            />
          </ul>
        </div>
      </div>
    </header>
  );
}
