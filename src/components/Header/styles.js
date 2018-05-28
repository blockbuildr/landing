export default theme => ({
  appBar: {
    backgroundColor: theme.colors.purple,
    boxShadow: '0px 0px 0px 0px',
  },
  toolbar: {
    paddingLeft: '48px',
    paddingRight: '48px',
  },
  button: {
    color: theme.colors.white,
    height: '40px',
    width: '137px',
    backgroundColor: theme.colors.lightBlue,
    borderRadius: '0px',
  },
  verticalHr: {
    height: '40px',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    marginRight: '26px',
  },
  container: {
    marginRight: '30px',
  },
  link: {
    fontSize: theme.fonts.medium,
    fontFamily: theme.fonts.openSans,
    fontWeight: theme.fonts.weight.semiBold,
  },
  learnMore: {
    fontFamily: theme.fonts.openSans,
  },
  logo: {
    width: '40px',
    height: '40px',
    backgroundColor: '#465dff',
    marginRight: '15px',
  },
  block: {
    fontSize: '27px',
    fontWeight: theme.fonts.weight.bold,
    fontFamily: theme.fonts.titillium,
  },
  buildr: {
    fontSize: '27px',
    fontWeight: theme.fonts.weight.extraLight,
    fontFamily: theme.fonts.titillium,
  },
});
