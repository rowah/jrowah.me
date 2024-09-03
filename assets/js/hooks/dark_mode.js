const darkModeHooks = {};

darkModeHooks.DarkThemeToggle = {
  /**
   * Handles the mounting of the component, initializing the theme toggle
   * functionality and setting up the event listener for the theme toggle button.
   *
   * @returns {void}
   */
  mounted() {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    const themeToggleButton = document.getElementById("theme-toggle");
    const localStorageKey = "theme";

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    /**
     * Checks if the system is in dark mode.
     *
     * @return {boolean} True if the system is in dark mode, false otherwise.
     */
    const isDarkMode = () => {
      try {
        return (
          localStorage.getItem(localStorageKey) === "dark" ||
          (prefersDarkMode && prefersDarkMode.matches)
        );
      } catch (_err) {
        return prefersDarkMode.matches;
      }
    };

    /**
     * Toggles the dark mode of the application.
     *
     * @param {boolean} dark - Indicates whether to enable or disable dark mode.
     * @return {void}
     */
    const toggleDarkMode = (dark) => {
      themeToggleDarkIcon.classList.toggle("hidden", dark);
      themeToggleDarkIcon.classList.toggle("text-transparent", dark);
      themeToggleLightIcon.classList.toggle("hidden", !dark);
      themeToggleLightIcon.classList.toggle("text-transparent", !dark);
      document.documentElement.classList.toggle("dark", dark);
      try {
        localStorage.setItem(localStorageKey, dark ? "dark" : "light");
      } catch (_err) {
        // ignore
      }
    };

    toggleDarkMode(isDarkMode());
    themeToggleButton.addEventListener("click", () => {
      toggleDarkMode(!isDarkMode());
    });
  },
  updated() {},
};

export default darkModeHooks;
