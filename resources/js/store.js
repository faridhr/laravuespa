import Vue from 'vue';
import VueX from 'vuex';


Vue.use(VueX);

export default new VueX.store({
  state: {
    apiURL: 'http://localhost:8000/api',
    serverPath: 'http://localhost:8000'
  },
  mutations: {},
  actions: {}
})
