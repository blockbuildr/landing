export default theme => ({
  container: {
    paddingTop: '84px',
    paddingLeft: '316px',
    height: '488px',
    backgroundColor: theme.colors.darkGray,
  },
  imageHolder: {
    width: '217px',
    height: '217px',
    opacity: 0.5,
    backgroundColor: 'grey',
    borderRadius: '120px',
    marginLeft: '64px',
    position: 'relative',
    bottom: '20px',
  },
  header: {
    fontSize: '40px',
    width: '490px',
    marginBottom: '15px',
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.semiBold,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    width: '490px',
    height: '305px',
  },
  description: {
    fontFamily: theme.fonts.openSans,
    fontSize: '23px',
    lineHeight: 1.52,
    fontWeight: theme.fonts.weight.light,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  button: {
    backgroundColor: theme.colors.white,
    borderRadius: '0px',
    height: '48px',
    marginTop: '80px',
    width: '192px',
  },
  buttonText: {
    color: theme.colors.lightBlue,
  },
});
