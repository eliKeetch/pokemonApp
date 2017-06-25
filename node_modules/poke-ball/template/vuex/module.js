
// mutations 修改state

import * as types from '../mutationTypes';

// initial state
const state = {
  list: [],
  data: {}
};

const mutations = {

  [types.{MODULENAME}_QUERY] (state, data) {
    state.list = data;
  },

  [types.{MODULENAME}_DEL] (state, data) {
    state.data = data;
  }
};

export default {
  state,
  mutations
};
