const initialState = {
  darkMode: false,
};
export const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
