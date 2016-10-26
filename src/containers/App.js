import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getConvertedWeight, getWeight } from '../selectors/weight';
import { getConversionSetting } from '../selectors/settings';

function mapStateToProps(state) {
  return {
    state,
    currentWeight: getConvertedWeight(state),
    conversionSetting: getConversionSetting(state),
  };
}

import * as settingActions from '../actions/settings';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(settingActions, dispatch);
}

function App(props) {
  return (
    <div>
      <h1>App</h1>

      <pre style={{ fontSize: 10 }}>{ JSON.stringify(props, null, 2) }</pre>

      <label>
        lbs
        <input
          checked={ props.conversionSetting === 'lbs' }
          type="radio"
          name="weight"
          onChange={ () => props.setConversion('lbs') }
          value="lbs" />
      </label>

      <label>
        kgs
        <input
          checked={ props.conversionSetting === 'kgs' }
          type="radio"
          name="weight"
          onChange={ () => props.setConversion('kgs') }
          value="kgs" />
      </label>

      <h2>You weigh { props.currentWeight } { props.conversionSetting }</h2>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
