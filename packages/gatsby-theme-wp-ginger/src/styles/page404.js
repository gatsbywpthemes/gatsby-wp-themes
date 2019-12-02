export const page404 = {
  minHeight: theme => [
    `calc(100vh - ${parseInt(theme.sizes.header[0]) + 74 + 48}px)`,
    `calc(100vh - ${parseInt(theme.sizes.header[1]) + 74 + 64}px)`,
    'calc(100vh - 64px)',
  ],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '.entry-content': {
    textAlign: 'center',
  },
}
