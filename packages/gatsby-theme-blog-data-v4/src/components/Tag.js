import React from 'react'

export default props => {
  console.log(props)
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>
}
