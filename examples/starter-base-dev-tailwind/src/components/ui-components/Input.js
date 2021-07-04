import tw, { styled } from "twin.macro"

const Input = styled.input(() => [
  tw`text-base bg-transparent`,
  tw`border-0 border-b border-current `,
  tw`shadow-input focus:shadow-inputFocus`,
  tw`transition`,
  tw`px-0 rounded-none`,
])

export { Input }
