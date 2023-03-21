export default {
  async fetchItems({ commit }) {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      commit("SET_ITEMS", data.products);
      commit("SET_ISLOADING");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchItem({ commit }, id) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      commit("SET_ITEM", data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
};
