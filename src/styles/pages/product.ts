import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(520px - 0.5rem)',
  background: 'linear-gradient(180deg, #1ea483 0%, #4565d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  igm: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',


  // 1.125rem
  // 1.25rem
  // 1.5rem
  // 2rem

  h1: {
    fontSize: '2rem',
    color: '$gray100',
  },

  span: {
    marginTop: '1rem',
    display: 'block',

    fontSize: '2rem',
    color: "$green300",
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})