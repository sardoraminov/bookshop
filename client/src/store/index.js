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
  },
  actions: {},
});

export default store;
