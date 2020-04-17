const sharedFormStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  'input, textarea': {
    fontWeight: 'body',
  },
  'input[type="file"]': {
    mb: '1rem',
    py: '0.75rem',
  },
  'textarea, input[type="search"],  input[type="text"], input[type="email"], input[type="url"], input[type="tel"], input[type="date"], input[type="number"]': {
    color: 'inherit',
    border: 'none',
    borderBottom: '1px solid',
    padding: '0.5rem',
    boxShadow: 'inset 0 0 0 currentColor',
    bg: 'transparent',
    transition: '.3s',
    display: 'block',
    width: '100%',
    minWidth: '100%',
    borderRadius: 0,
    mb: '1rem',
    '&:focus': {
      boxShadow: 'inset 0 -3px 0 currentColor',
      outline: 'none',
    },
  },
  'label, .form-field-radio, .form-field-checkbox': {
    variant: 'special',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
  '.form-field-radio label': {
    fontWeight: 'body',
    py: '.25rem',
    display: 'inline-block',
    mr: '0.75rem',
  },
  'input[type="radio"]': {
    ml: '0.25rem',
  },
  'input[type="checkbox"]': {
    mr: '0.25rem',
    my: '0.75rem',
  },
  'input[type="number"]': {
    width: 'auto',
    minWidth: 0,
  },
  'input[type="submit"], button[type=submit]': {
    variant: 'special',
    padding: '0.75rem',
    bg: 'transparent',
    border: '1px solid',
    color: 'inherit',
    fontWeight: 'bold',
    boxShadow: 'inset 0 0 0 0 currentColor',
    transition: '.3s',
    ':hover:not([disabled])': {
      boxShadow: 'inset 0 0 0 2px currentColor',
    },
    '&[disabled]': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    margin: 'auto 0 auto auto',
  },
  '.form-field': {
    width: ['100%', 'calc(50% - 1rem)'],
  },
  '.comment-notes, .comment-form-comment, .comment-form-url, .form-field-textarea': {
    width: '100%',
  },
  '.form-field-text:last-of-type:nth-child(2n+1), .form-field:empty': {
    width: '100%',
  },
  '.comment-form-author,.comment-form-email': {
    width: ['100%', 'calc(50% - 1rem)'],
  },
  '.form-submit': {
    margin: 'auto 0 auto auto',
  },
  '.error': {
    fontSize: 'xxs',
    fontStyle: 'italic',
    display: 'block',
    mt: '-1rem',
    textTransform: 'none',
    letterSpacing: 'initial',
    fontWeight: 'body',
  },
  select: {
    display: 'block',
    p: '0.5625rem',
    width: '100%',
    maxWidth: '100%',
    m: 0,
    border: '1px solid',
    boxShadow: 'none',
    borderRadius: 0,
    mozAappearance: 'none',
    webkitAppearance: 'none',
    appearance: 'none',
    bg: 'white',
    backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `right .7em top 50%`,
    backgroundSize: `.65rem auto`,

    '&::-ms-expand': {
      display: 'none',
    },

    '&:focus': {
      borderWidth: '3px',
      outline: 'none',
    },
    option: {
      fontWeight: 'body',
    },
  },
}

export default {
  ...sharedFormStyles,
  boxShadow: '0 10px 40px rgba(0,0,0,.15)',
  '.dark-color-mode &': {
    boxShadow: `0 20px 40px rgba(0,0,0,.4)`,
  },
  mb: '2rem',
  py: '3rem',
  px: '2rem',
  '.dark-color-mode & select': {
    bg: 'background',
    color: 'text',
    backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')`,
  },
}
