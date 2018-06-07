export default theme => ({
  container: {
    backgroundColor: theme.colors.purple,
  },
  innerContainer: {
    backgroundColor: theme.colors.whiteGray,
    paddingTop: '62px',
    paddingLeft: '136px',
    paddingRight: '192px',
    paddingBottom: '62px',
  },
  faqTitle: {
    fontSize: '50px',
    backgroundColor: theme.colors.purple,
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.bold,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    paddingTop: '56px',
    paddingLeft: '225px',
    paddingRight: '224px',
    paddingBottom: '49px',
  },
});
