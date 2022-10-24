import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}


export default function Product({product}: ProductProps) {
  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl

    } catch(err) {
      console.log(err)
      console.log(err)
      alert('Falha ao redirecionar para checkout')
    }
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.name} width={480} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id;

  const productData = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = productData.default_price as Stripe.Price

  const product = {
    id: productData.id,
    name: productData.name,
    imageUrl: productData.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
    description: productData.description,
    defaultPriceId: price.id,
  }

  return {
    props: {product},
    revalidate: 60 * 60 * 2 // 2 hours
  }
}