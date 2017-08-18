import * as actionTypes from '../constants/actionTypes';
//import Immutable from 'immutable';
//import _ from 'lodash';
//import * as helper from '../utils/helpers';

export function hello(words) {
  return {
    type: actionTypes.HELLO,
    words: words,
  }
}

export function asynHello(words) {
  return (dispatch,getState,{api}) => {
    console.log('api obj ==>', api);
    dispatch(hello(words));
    return Promise.resolve();
  };
}