export default {
  namespaced: true,
  state() {
    return {
      user: {},
      users: [],
    };
  },

  mutations: {
    SET_USER(state, payload) {
      if (localStorage.users) {
        let lsUsers = localStorage.users;
        state.users = JSON.parse(lsUsers);
      }

      state.users.push(payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    GET_USERS(state) {
      if (localStorage.users) {
        let lsUsers = localStorage.users;
        state.users = JSON.parse(lsUsers);
      }

      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
  },
};
