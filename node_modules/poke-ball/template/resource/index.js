import Vue from 'vue';

export default {
  resource () {
    return Vue.resource('/{{resourceName}}/posts{/id}');
  }
};
