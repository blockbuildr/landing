const circle = {
  width: '32px',
  height: '32px',
  backgroundColor: '#e28313',
  border: 'solid 4px #3d3d3d',
  borderRadius: '25px',
  zIndex: 2,
};

export default theme => ({
  container: {
    height: '584px',
    backgroundColor: theme.colors.purple,
    paddingTop: '72px',
  },
  header: {
    fontSize: '50px',
    fontFamily: theme.fonts.titillium,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    fontWeight: theme.fonts.weight.bold,
  },
  mapContainer: {
    width: '1344px',
    height: '336px',
    backgroundColor: theme.colors.lightGray,
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.24)',
    borderRadius: '3px',
    marginTop: '32px',
  },
  textContainer: {
    width: '90%',
    position: 'relative',
    bottom: '55px',
  },
  artContainer: {
    width: '75%',
    marginTop: '15px',
  },
  circle,
  whiteCircle: {
    ...circle,
    backgroundColor: theme.colors.white,
  },
  horizontalLine: {
    width: '990px',
    zIndex: 1,
    height: '8px',
    borderRadius: '4px',
    backgroundColor: theme.colors.darkGray,
    position: 'absolute',
  },
  verticalLine: {
    width: '4px',
    height: '35px',
    backgroundColor: theme.colors.darkGray,
    position: 'relative',
    left: '9.1px',
    top: '24px',
  },
  descriptionContainer: {
    width: '224px',
  },
  quarter: {
    color: theme.colors.darkGray,
    fontSize: '18px',
    fontWeight: theme.fonts.weight.bold,
    lineHeight: 1.44,
    marginBottom: '10px',
  },
  description: {
    color: theme.colors.darkGray,
    fontSize: '14px',
    fontFamily: theme.fonts.openSans,
    textAlign: 'justify',
  },
});
