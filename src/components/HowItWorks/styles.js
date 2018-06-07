export default theme => ({
  gridContainer: {
    height: '1327px',
    backgroundColor: theme.colors.purple,
    padding: '106px 232px',
  },
  title: {
    fontFamily: theme.fonts.titillium,
    fontSize: '50px',
    marginBottom: '86px',
    fontWeight: theme.fonts.weight.bold,
  },
  placeholder: {
    height: '160px',
    width: '160px',
    opacity: 0.5,
    backgroundColor: theme.colors.white,
  },
  rightText: {
    marginLeft: '32px',
  },
  leftText: {
    marginRight: '32px',
  },
  subheader: {
    fontFamily: theme.fonts.openSans,
    fontSize: '30px',
    fontWeight: theme.fonts.weight.bold,
    marginBottom: '16px',
    width: '776px',
  },
  description: {
    width: '776px',
    fontFamily: theme.fonts.openSans,
    lineHeight: 1.26,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    fontSize: '19px',
    marginBottom: '5px',
    fontWeight: theme.fonts.weight.light,
  },
  card: {
    marginBottom: '120px',
  },
  columnContainer: {
    width: '980px',
  }
});
