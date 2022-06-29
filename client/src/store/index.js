import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, payload) {
      state.count = payload;
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  actions: {},
});

export default store;
