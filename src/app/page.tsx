/* eslint-disable camelcase */
import Conjunto_Apresentacao from "@/components/Conjunto_Apresentacao";
import Conjunto_Projetos from "@/components/Conjunto_Projetos";
import Conjunto_Sobre from "@/components/Conjunto_Sobre";
import Conjunto_tContato from "@/components/Conjunto_tContato";

export default function Home() {
  return (
    <div>
      <Conjunto_Apresentacao />
      <Conjunto_Projetos />
      <Conjunto_Sobre />
      <Conjunto_tContato />
    </div>
  );
}
