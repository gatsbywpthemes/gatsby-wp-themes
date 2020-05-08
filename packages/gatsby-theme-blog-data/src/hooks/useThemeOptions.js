import { useContext } from 'react'
import { themeOptions } from '../../context'

export const useThemeOptions = () => useContext(themeOptions)
