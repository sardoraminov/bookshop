import { createStore } from "vuex";

const store = createStore({
  state: {
    toast: {
      show: false,
      msg: "",
    },
    button: {
      disabled: false,
    },
    loading: false,
  },
  mutations: {
    setToastShow(state, payload) {
      state.toast.show = payload;

      setTimeout(() => {
        state.toast.show = false;
      }, 5000);
    },
    setToastMsg(state, payload) {
      state.toast.msg = payload;

      setTimeout(() => {
        state.toast.msg = "";
      }, 5000);
    },
    setDisabledButton(state, payload) {
      state.button.disabled = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  getters: {
    getToastShow(state) {
      return state.toast.show;
    },
    getToastMsg(state) {
      return state.toast.msg;
    },
    getDisabledButton(state) {
      return state.button.disabled;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  actions: {},
});

export default store;
