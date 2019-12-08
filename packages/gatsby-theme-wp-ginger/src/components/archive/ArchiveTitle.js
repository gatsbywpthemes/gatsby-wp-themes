/** @jsx jsx */
import { jsx } from 'theme-ui'
import pageTitle from '../../styles/pageTitle'

const ArchiveTitle = ({ name, text }) => {
  return (
    <h1 sx={pageTitle}>
      <span className="page-title-pre">{text}</span>
      <span className="page-title-value">{name}</span>
    </h1>
  )
}

export default ArchiveTitle
