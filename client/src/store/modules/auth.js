import api from "../../helpers/api";
import Cookies from "js-cookie"

const authModule = {
  state: {
    account: {},
    token: "",
  },
  getters: {
    getAccount(state) {
      return state.account;
    },
    getToken(state) {
      return state.token;
    },
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async register(context, payload) {
      context.commit("setDisabledButton", true);
      const res = await api.post("/accounts/register", payload);
    },
  },
};
