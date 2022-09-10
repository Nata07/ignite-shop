import { HomeContainer, Product } from "../styles/pages/home"
import Image from "next/future/image"
import {useKeenSlider} from 'keen-slider/react'

import camisa1 from '../assets/01.png'
import camisa2 from '../assets/02.png'
import camisa3 from '../assets/03.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} width={480} height={480} alt="" />

        <footer>
          <strong>Camiseta 01</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa2} width={480} height={480} alt="" />

        <footer>
          <strong>Camiseta 01</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa3} width={480} height={480} alt="" />

        <footer>
          <strong>Camiseta 01</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
