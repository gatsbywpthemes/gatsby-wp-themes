// import React from 'react'
// import { useStyleConfig, Box } from '@chakra-ui/react'

// export const Container = ({ size, sx, ...rest }) => {
//   const styles = useStyleConfig('CenterContainer', { size })
//   const customStyles = sx
//   return <Box sx={{ ...styles, ...customStyles }} {...rest} />
// }

import tw, { styled } from "twin.macro"

export const Container = styled.div(() => [tw`px-5 mx-auto  md:px-6 lg:px-10`])
