export default {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },

  SET_ISLOADING(state) {
    state.isLoading = false;
  },
};
