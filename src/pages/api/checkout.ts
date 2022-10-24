import { stripe } from './../../lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body
  console.log('priceId')
  console.log(priceId)

  const cancelUrl = `${process.env.NEXT_URL}`
  const successUrl = `${process.env.NEXT_URL}/success`
  
  const checkoutSessions = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    cancel_url: cancelUrl,
    success_url: successUrl
  })  

  console.log('checkoutSessions')
  console.log(checkoutSessions)

  return res.status(201).json({
    checkoutUrl: checkoutSessions.url
  })
}