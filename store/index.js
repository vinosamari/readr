export const state = () => ({
  currentUser: {
    history: ["one", "two"],
  },
  showAbout: false,
});

export const actions = {};
export const getters = {};
export const mutations = {
  TOGGLE_ABOUT: (state) => {
    state.showAbout = !state.showAbout;
  },
};
