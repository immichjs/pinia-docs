import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favoriteStore", {
  state: () => {
    return {
      favorites: [],
    };
  },
  getters: {
    favoriteCount: (state) => state.favorites.length,
  },
  actions: {
    addFavorite(item) {
      if (!this.favorites.find((element) => element === item)) {
        this.favorites.push(item);
      }
    },
    favoriteExists(item) {
      return this.favorites.find((element) => element === item);
    },
    removeFavorite(item) {
      const index = this.favorites.findIndex(
        (element) => element.name === item.name
      );
      if (index >= 0) {
        this.favorites.splice(index, 1);
      }
    },
  },
});
