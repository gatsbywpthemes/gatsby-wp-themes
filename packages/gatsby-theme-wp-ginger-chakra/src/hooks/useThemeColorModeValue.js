import { useColorModeValue } from '@chakra-ui/react'

export const useThemeColorModeValue = (value, mode = 'dark') => {
  return useColorModeValue(value, `modes.${mode}.${value}`)
}
