import tw, { styled } from "twin.macro"

export const Card = styled.div(({ primary }) => [
  tw`p-5 rounded-lg shadow-lg sm:p-12`,
  tw`bg-cardBg dark:bg-dark-cardBg`,
  primary && tw`text-white bg-accentColor`,
])
