export default theme => ({
  container: {
    paddingTop: '108px',
    paddingBottom: '112px',
    paddingLeft: '232px',
    paddingRight: '241px',
    height: '588px',
    backgroundColor: theme.colors.lightBlue,
  },
  header: {
    fontSize: '40px',
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.medium,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  featureContainer: {
    width: '416px',
  },
  subheader: {
    marginTop: '20px',
    fontFamily: theme.fonts.titillium,
    fontSize: theme.fonts.large,
    lineHeight: 1.4,
    fontWeight: theme.fonts.weight.extraLight,
  },
  descriptionContainer: {
    marginLeft: '88px',
  },
  descriptionCard: {
    marginBottom: '24px',
  },
});
