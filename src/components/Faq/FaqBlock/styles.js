export default theme => ({
  container: {
    backgroundColor: theme.colors.whiteGray,
    paddingLeft: '136px',
    paddingRight: '120px',
  },
  innerContainer: {
    width: '496px',
    backgroundColor: theme.colors.whiteGray,
  },
  faqImage: {
    fontSize: '50px',
    width: '32px',
    height: '32px',
    opacity: 0.5,
    backgroundColor: 'grey',
  },
  faqTitle: {
    fontSize: '23px',
    height: '72px',
    width: '423px',
    paddingLeft: '16px',
    color: theme.colors.faqPurple,
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.bold,
  },
  faqBody: {
    width: '496px',
    fontSize: '16px',
    lineHeight: '26px',
    paddingBottom: '36px',
    color: theme.colors.charcoal,
    fontFamily: theme.fonts.openSans,
  },
});
