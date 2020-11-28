import { testPluginOptionsSchema } from "gatsby-plugin-utils";
import { pluginOptionsSchema } from "../src/gatsby-node";

describe("plugin options schema", () => {
  it("accepts valid options", async () => {
    const options = {
      defaultDarkTheme: "theme-twitter",
      defaultLightTheme: "theme-midnightgreen",
      themeStorageKey: "theme",
      minify: false,
    };

    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it("rejects extra options", async () => {
    const options = {
      defaultDarkTheme: "dark",
      defaultLightTheme: "light",
      themeStorageKey: "theme",
      minify: false,
      randomOption: "hola mundo",
    };

    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(false);
    expect(errors).toMatchInlineSnapshot(`
      Array [
        "\\"randomOption\\" is not allowed",
      ]
    `);
  });

  it("rejects invalid option types", async () => {
    const options = {
      defaultDarkTheme: 1,
      defaultLightTheme: 2,
      themeStorageKey: 3,
      minify: 4,
    };

    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(false);
    expect(errors).toMatchInlineSnapshot(`
      Array [
        "\\"defaultDarkTheme\\" must be a string",
        "\\"defaultLightTheme\\" must be a string",
        "\\"themeStorageKey\\" must be a string",
        "\\"minify\\" must be a boolean",
      ]
    `);
  });
});
