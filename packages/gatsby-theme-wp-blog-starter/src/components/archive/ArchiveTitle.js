/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Flex className="archive-title" sx={{ justifyContent: `flex-start` }}>
      <h1
        sx={{
          variant: `text.special.archiveTitle`,
          mt: 0,
        }}
      >
        {text} {name}
      </h1>
    </Flex>
  )
}
