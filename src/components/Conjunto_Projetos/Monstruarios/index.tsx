import React from "react";
import Image from "next/image";
import ipad from "../../../../public/ipad.png";
import styles from "./index.module.css";

export default function index() {
  return (
    <div className={styles.organizacao}>
      <div className={styles.divprojetos}>
        <Image src={ipad} alt='ipad' width={550} />
        <p>Fazedir De sla</p>
        <h1>ele faz sla e serve para sla mais</h1>
      </div>
      <div className={styles.divprojetos}>
        <Image src={ipad} alt='ipad' width={550} />
        <p>Fazedir De sla</p>
        <h1>ele faz sla e serve para sla mais</h1>
        <h1>ele faz sla e serve para sla mais dasd asd asa daw</h1>
      </div>
      <div className={styles.divprojetos}>
        <Image src={ipad} alt='ipad' width={550} />
        <p>Fazedir De sla</p>
        <h1 className={styles.txt34}>
          ele faz sla e serve para sl mais isso e aquilo sla
        </h1>
      </div>
      <div className={styles.divprojetos}>
        <Image src={ipad} alt='ipad' width={550} />
        <p>Fazedir De sla</p>
        <h1
          className={styles.txt34}
          style={{
            marginBottom: 30,
          }}
        >
          ele faz sla e serve para sla mais isso e aquilo
        </h1>
      </div>
    </div>
  );
}
