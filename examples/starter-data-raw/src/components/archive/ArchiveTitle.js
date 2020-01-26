/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const ArchiveTitle = ({ name, text }) => {
  return (
    <Flex className="archive-title">
      <h1>
        {text} {name}
      </h1>
    </Flex>
  )
}

export default ArchiveTitle
