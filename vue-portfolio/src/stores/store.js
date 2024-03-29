import { createStore } from 'vuex';

export default createStore({
    state() {
      return {
        //in "options" I will store the global tab options used through the application:
        options: {
          "About": ["Overview", "Personal interests", "Video Presentation"],
          "Resume": ["Skills", "Experience", "Academic"],
          "Projects": ["Real-world_projects", "Personal projects"]
        },
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