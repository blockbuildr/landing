export default theme => ({
  appBar: {
    backgroundColor: theme.colors.fold,
    boxShadow: '0px 0px 0px 0px',
  },
  subscribe: {
    color: theme.colors.white,
  },
  verticalHr: {
    height: '33px',
    borderLeft: `1px solid ${theme.colors.white}`,
    marginRight: '10px',
  },
  container: {
    marginRight: '30px',
  },
  link: {
    fontSize: theme.fonts.small,
  },
  logo: {
    width: '40px',
    height: '40px',
    backgroundColor: '#465dff',
    marginRight: '15px',
  },
});
