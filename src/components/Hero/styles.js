export default theme => ({
  container: {
    height: '696px',
    backgroundColor: theme.colors.purple,
  },
  gridContainer: {
    height: '696px',
  },
  imageHolder: {
    width: '416px',
    height: '208px',
    opacity: 0.5,
    backgroundColor: 'grey',
    marginBottom: '32px',
    marginTop: '48xp',
  },
  block: {
    fontSize: theme.fonts.header,
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.bold,
  },
  buildr: {
    fontSize: theme.fonts.header,
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.light,
  },
  blockbuildr: {
    marginBottom: '20px',
  },
  subTitle: {
    fontSize: '23px',
    fontFamily: theme.fonts.titillium,
    width: '624px',
  },
  subTitleContainer: {
    marginBottom: '45px',
  },
  button: {
    color: theme.colors.white,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: '0px',
    width: '160px',
    height: '48px',
  },
  particle: {
    position: 'absolute',
    width: '100%',
    height: '696px',
    zIndex: 0,
  },
});
