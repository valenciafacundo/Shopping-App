import { theme, lightTheme, darkTheme } from "../../theme/theme";

const types = { CHANGE_THEME: "change_theme" };

const initialState = theme;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      const newColors =
        action.payload === "dark"
          ? {
              ...state.colors,
              bgMain: lightTheme.bgMain,
              bgPrimary: lightTheme.bgPrimary,
              bgSecondary: lightTheme.bgSecondary,
              textMain: lightTheme.textMain,
              textPrimary: lightTheme.textPrimary,
              textSecondary: lightTheme.textSecondary,
            }
          : {
              ...state.colors,
              bgMain: darkTheme.bgMain,
              bgPrimary: darkTheme.bgPrimary,
              bgSecondary: darkTheme.bgSecondary,
              textMain: darkTheme.textMain,
              textPrimary: darkTheme.textPrimary,
              textSecondary: darkTheme.textSecondary,
            };
      return {
        ...state,
        theme: action.payload,
        colors: newColors,
      };

    default:
      return state;
  }
};
