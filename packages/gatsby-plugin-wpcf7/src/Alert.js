import React from 'react'

const Alert = ({ alertState, setAlertState }) => {
  const { visible, message, className } = alertState
  if (visible) {
    setTimeout(() => {
      setAlertState({ visible: false })
    }, 6000)
  }
  return (
    <>
      {true && (
        <div className={className}>
          <p className="sal-disabled">{message}</p>
        </div>
      )}
    </>
  )
}

export default Alert
