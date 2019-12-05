/** @jsx jsx */
import { jsx } from 'theme-ui'

const ArchiveTitle = ({ name, text }) => {
  return (
    <h1 sx={{ variant: 'special.Title' }}>
      <span className="page-title-pre">{text}</span>
      <span className="page-title-value">{name}</span>
    </h1>
  )
}

export default ArchiveTitle
