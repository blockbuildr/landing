import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import withRoot from '../../material/withRoot';

class Main extends Component {
  render() {
    return (
      <div className="main">
      	<div className="footer">
      		<p style={{textAlign:'left',display: 'flex',justifyContent: 'space-between'}}>
				Copyright Blockbuildr 2018 - All Rights Reserved 
      		

      		<span style={{textAlign:'right'}}>
				Privacy Policy is something something
				</span>
      		</p>
      	</div>
      </div>

    );
  }
}
export default withRoot(withStyles(styles)(Main));