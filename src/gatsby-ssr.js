import React from "react";
import ThemeScriptTag from "./theme-script";
import { ThemeProvider } from "./theme-context";

export function onRenderBody({ setPreBodyComponents }, pluginOptions) {
  // eslint-disable-next-line no-param-reassign
  delete pluginOptions.plugins;

  const {
    defaultDarkTheme,
    defaultLightTheme,
    themeStorageKey,
    minify,
  } = pluginOptions;

  setPreBodyComponents([
    <ThemeScriptTag
      key="gatsby-plugin-use-theme-switcher"
      defaultDarkTheme={defaultDarkTheme}
      defaultLightTheme={defaultLightTheme}
      themeStorageKey={themeStorageKey}
      minify={minify}
    />,
  ]);
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
