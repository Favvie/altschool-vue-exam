export default {
  async fetchItems({ commit }) {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      commit("SET_ITEMS", data.products);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
};
