export default theme => ({
  container: {
    paddingTop: '56px',
    paddingLeft: '200px',
    paddingRight: '200px',
    height: '1337px',
    backgroundColor: theme.colors.purple,
  },
  header: {
    fontSize: '50px',
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.bold,
    marginBottom: '24px',
  },
  subheader: {
    color: '#7cffcb',
    fontFamily: theme.fonts.shareTech,
    fontSize: '25px',
    marginBottom: '35px',
  },
  description: {
    fontFamily: theme.fonts.openSans,
    fontSize: '19px',
    lineHeight: 1.26,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: theme.fonts.extraLight,
    marginBottom: '25px',
  },
  team: {
    fontSize: '28px',
    fontWeight: theme.fonts.weight.semiBold,
    fontFamily: theme.fonts.openSans,
    marginBottom: '50px',
  },
  profileContainer: {
    marginBottom: '64px',
  },
});
