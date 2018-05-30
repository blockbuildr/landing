export default theme => ({
  container: {
    height: '568px',
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingTop: '56px',
    paddingLeft: '225px',
    paddingRight: '224px',
    paddingBottom: '114px',
  },
  containerInner: {
    marginTop: '48px',
  },
  title: {
    fontSize: theme.fonts.header,
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.socialBlue,
  },
  imageHolder: {
    width: '315px',
    height: '286px',
    opacity: 0.5,
    backgroundColor: theme.colors.lightGray,
  },
});
