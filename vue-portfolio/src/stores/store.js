import { createStore } from 'vuex';

export default createStore({
    state() {
      return {
        optionLeft: "About",
        optionRight: "Overview"
      };
    },
    mutations: {
      setOptionLeft(state, value) {
        state.optionLeft = value;
      },
      setOptionRight(state, value) {
        state.optionRight = value;
      },
    },
  });