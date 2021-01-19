import React, { useEffect, useRef } from "react"

export const Alert = ({ alertState, setAlertState }) => {
  const { visible, message, className } = alertState
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (visible) {
      timeoutRef.current = setTimeout(() => {
        setAlertState({ visible: false })
      }, 6000)
    }
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [visible, setAlertState])

  return (
    <div className={className}>
      <p className="sal-disabled">{message}</p>
    </div>
  )
}
