export const state = () => ({
  locales: [
    {
      name: "Lao",
      value: "la"
    },
    {
      name: "English",
      value: "en"
    }
  ],
  locale: "la"
});
export const getters = {
  locale: state => state.locales,
  locales: state => state.locales
};
export const mutations = {
  // set language
  SET_LANG(state, locale) {
    state.locale = locale;
    this.$cookies.set("lang", locale);
  }
};
export const actions = {};
