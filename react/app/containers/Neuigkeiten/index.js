/*
 *
 * Neuigkeiten
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class Neuigkeiten extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

Neuigkeiten.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Neuigkeiten);
