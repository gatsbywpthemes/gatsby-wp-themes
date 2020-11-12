/** @jsx jsx */
import { jsx } from 'theme-ui'
import { pageTitleStyles } from '../../styles'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <h1 sx={pageTitleStyles}>
      <span className="page-title-pre">{text}</span>
      <span className="page-title-value">{name}</span>
    </h1>
  )
}
