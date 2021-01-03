import { format } from 'date-fns'

const PostDate = ({ date }) => {
  return !!date && format(new Date(date), 'MMMM dd, yyyy')
}

export { PostDate as Date }
