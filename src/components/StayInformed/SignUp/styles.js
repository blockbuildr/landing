export default theme => ({
  container: {
    width: '640px',
    height: '286px',
    backgroundColor: theme.colors.lightGray,
    marginLeft: '45px',
    paddingLeft: '40px',
    paddingRight: '32px',
  },
  description: {
    fontSize: '18px',
    fontFamily: theme.fonts.titillium,
    color: theme.colors.charcoal,
    width: '551px',
    height: '104px',
  },
  emailTitle: {
    fontSize: '16px',
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.charcoal,
    marginBottom: '8px',
  },
  emailInput: {
    width: '424px',
    height: '40px',
    backgroundColor: theme.colors.white,
  },
  signUp: {
    color: 'theme.colors.white',
    backgroundColor: theme.colors.lightBlue,
    width: '120px',
    height: '40px',
    marginLeft: '16px',
  },
});
