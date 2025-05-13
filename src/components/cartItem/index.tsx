import { Container } from "./styles";
import thumbnail from "../../assets/camisetas/1.png"
import Image from "next/image";

export function CartItem() {
  return (
    <Container>
      <div>
        <Image src={thumbnail} width={102} height={93} alt="" />
      </div>

      <div>
        <span>Camiseta Beyond the Limits</span>
        <strong>R$ 79,90</strong>

        <a>Remover</a>
      </div>
    </Container>
  )
}