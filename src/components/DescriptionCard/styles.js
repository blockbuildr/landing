export default theme => ({
  image: {
    width: '32px',
    height: '32px',
    borderRadius: '20px',
    backgroundColor: theme.colors.gray,
  },
  textContainer: {
    marginLeft: '16px',
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.openSans,
    fontWeight: theme.fonts.lightMedium,
    fontSize: '23px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
});
