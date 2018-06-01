export default theme => ({
  container: {
    width: '200px',
    height: '240px',
    borderRadius: '6px',
    backgroundColor: '#C0C7EA',
  },
  image: {
    height: '112px',
    width: '112px',
    backgroundColor: theme.colors.gray,
    marginTop: '18px',
    marginBottom: '33px',
    borderRadius: '100px',
  },
  name: {
    color: theme.colors.charcoal,
    fontFamily: theme.fonts.openSans,
    fontSize: '18px',
    fontWeight: theme.fonts.weight.bold,
    marginBottom: '8px',
  },
  title: {
    color: theme.colors.charcoal,
    fontSize: '15px',
    fontWeight: theme.fonts.weight.light,
    fontFamily: theme.fonts.openSans,
  }
});
