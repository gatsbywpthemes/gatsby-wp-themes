export const page404 = {
  minHeight: theme => [
    `calc(100vh - ${parseInt(theme.sizes.header[0]) + 4.625 + 3}rem)`,
    `calc(100vh - ${parseInt(theme.sizes.header[1]) + 4.625 + 4}rem)`,
    'calc(100vh - 4rem)',
  ],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '.entry-content': {
    textAlign: 'center',
  },
}
