import Image from "next/image";
import { HomeContainer, Product } from "./home";

import shirtOne from '@/assets/camisetas/1.png'
import shirtTwo from '@/assets/camisetas/2.png'
import shirtThree from '@/assets/camisetas/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirtOne} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirtTwo} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
