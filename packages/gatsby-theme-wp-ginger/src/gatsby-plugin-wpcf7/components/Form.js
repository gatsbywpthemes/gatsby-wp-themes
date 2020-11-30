/** @jsx jsx */
import { jsx } from 'theme-ui'
export const Form = ({ children, ...props }) => {
  return (
    <form sx={{ variant: 'form' }} className="contact-form" {...props}>
      {children}
    </form>
  )
}
