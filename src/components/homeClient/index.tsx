"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { HomeContainer, Product } from "@/app/home";
import "keen-slider/keen-slider.min.css";
import { globalCss } from "@/styles";
import { useEffect } from "react";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { HangBagButton } from "../Hangbag";

// Adicione estilos globais para o slider não inicializado
const sliderStyles = globalCss({
  ".keen-slider:not(.keen-slider-initialized)": {
    display: "flex",
    gap: "48px",

    "& > div": {
      minWidth: "calc((100% - 96px) / 3)",
      maxWidth: "calc((100% - 96px) / 3)",
    },
  },
});

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
  sliderStyles();

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.container.classList.add("keen-slider-initialized");
    }
  }, [instanceRef]);

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <div>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </div>
            <HangBagButton fill />
          </footer>
        </Product>
      ))
      }
    </HomeContainer >
  );
}
