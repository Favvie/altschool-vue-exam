import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      item: {},
      isLoading: true,
    };
  },
  mutations,
  getters,
  actions,
};
