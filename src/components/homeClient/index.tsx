"use client"

import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image";
import { HomeContainer, Product } from "@/app/home";
import 'keen-slider/keen-slider.min.css'

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeClientProps {
  products: Product[];
}

export function HomeClient({ products }: HomeClientProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}
