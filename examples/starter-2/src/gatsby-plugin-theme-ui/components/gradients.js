import { lighten, darken } from 'polished'
export const gradients = {
  primary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.primary},${t.colors.yellow})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.primary}, ${t.colors.purple} )`,
  },
  cardGradient: {
    backgroundImage: t =>
      `linear-gradient(120deg,${t.colors.gradientColor1}, ${t.colors.gradientColor2}   )`,
  },
}
