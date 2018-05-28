export default theme => ({
  container: {
    paddingTop: '56px',
    paddingBottom: '56px',
    paddingLeft: '160px',
    height: '488px',
    backgroundColor: theme.colors.purple,
  },
  imageHolder: {
    width: '304px',
    height: '304px',
    opacity: 0.5,
    backgroundColor: 'grey',
  },
  header: {
    fontSize: '36px',
    fontFamily: theme.fonts.titillium,
    fontWeight: theme.fonts.weight.medium,
  },
  subheader: {
    color: '#7cffcb',
    fontFamily: theme.fonts.shareTech,
    fontSize: '25px',
    marginTop: '25px',
    marginBottom: '25px',
  },
  textContainer: {
    width: '736px',
    marginLeft: '80px',
    height: '305px',
  },
  description: {
    fontFamily: theme.fonts.openSans,
    fontSize: '23px',
    lineHeight: 1.7,
  },
  button: {
    backgroundColor: theme.colors.white,
  },
  buttonText: {
    color: theme.colors.lightBlue,
  },
});
