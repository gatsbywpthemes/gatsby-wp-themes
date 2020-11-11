import moment from 'moment/moment'

export const Date = ({ date }) => moment(date).format(`MMMM D, YYYY`)
