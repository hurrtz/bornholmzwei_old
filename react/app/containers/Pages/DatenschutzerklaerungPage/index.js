/*
 *
 * Datenschutzerklaerung
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class DatenschutzerklaerungPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Datenschutzerklärung
      </div>
    );
  }
}

DatenschutzerklaerungPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DatenschutzerklaerungPage);
