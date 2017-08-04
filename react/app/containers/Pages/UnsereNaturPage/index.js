/*
 *
 * UnsereNatur
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class UnsereNaturPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Unsere Natur
      </div>
    );
  }
}

UnsereNaturPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(UnsereNaturPage);
