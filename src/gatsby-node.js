exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    defaultDarkTheme: Joi.string()
      .default("theme-twitter")
      .description("Class name when prefers-color-scheme: dark"),
    defaultLightTheme: Joi.string()
      .default("theme-midnightgreen")
      .description("default class name for light theme"),
    themeStorageKey: Joi.string()
      .default("theme")
      .description("localStorage key to persist theme selected"),
    minify: Joi.boolean()
      .default(true)
      .description("enable terser minification of theme script"),
  });
};
