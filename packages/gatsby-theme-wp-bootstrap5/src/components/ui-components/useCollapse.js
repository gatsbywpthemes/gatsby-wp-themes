import { useState } from 'react'
export const useCollapse = () => {
  const [showClass, setShowClass] = useState('')
  const handler = () => {
    setShowClass((s) => (s ? '' : 'show'))
  }
  return [showClass, handler]
}
