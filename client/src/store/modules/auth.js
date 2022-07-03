import api from "../../helpers/api";
import Cookies from "js-cookie";

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
      try {
        context.commit("setLoading", true, { root: true });
        context.commit("setDisabledButton", true, { root: true });
        const res = await api.post("/accounts/register", payload);
        context.commit("setLoading", false, { root: true });
        context.commit("setDisabledButton", false, { root: true });
        context.commit("setToastShow", true, { root: true });
        context.commit("setToastMsg", res.data.msg, { root: true });

        if (res.data.status === "success") {
          context.commit("setAccount", res.data.account);
          context.commit("setToken", res.data.token);

          Cookies.set("account", JSON.stringify(res.data.account));
          Cookies.set("token", res.data.token);

          setTimeout(() => {
            window.location.href = "/explore";
          }, 1000);
          
        } else {
          return;
        }
      } catch (error) {
        context.commit("setLoading", false, { root: true });
        context.commit("setDisabledButton", false, { root: true });
        context.commit("setToastShow", true, { root: true });
        context.commit("setToastMsg", res.data.msg, { root: true });
      }
    },
  },
};
