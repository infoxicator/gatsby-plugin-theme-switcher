# [gatsby-plugin-theme-switcher][package]

## Because Dark Mode is not enough!

A [Gatsby][gatsby] plugin to switch between multiple themes, including dark mode and more! And the best part? No "white flash of death"!

![theme-switcher-demo](https://user-images.githubusercontent.com/17012976/100528209-1202d200-31d2-11eb-8868-359d652ed1dd.gif)


## Install

```sh
yarn add gatsby-plugin-theme-switcher
```

## Usage

### Add the plugin to your `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    'gatsby-plugin-theme-switcher',
    ''
  ],
};
```
### Add your themes

This plugin adds a custom class name to the `body` element of your site and uses CSS variables to customise your color scheme. Add your themes with the `.theme-*` format:

```css
.theme-twitter {
  --color-bg-primary: #15202B;
  --color-bg-primary-light: #172D3F;
  --color-bg-accent: #1B91DA; 
  --color-bg-accent-light: #1B91DA; 
  --color-bg-secondary: #657786;
  --color-text-link: #1B91DA;    
  --color-bg-compliment: #112b48;
  --color-bg-default: #192734;
  --color-bg-inverse: #1B91DA;
  --color-text-primary: #fff;
  --color-text-secondary: #f2f2f2;
  --color-text-default: #e9e9e9;
  --color-text-default-soft: #6a6a6a;
  --color-text-inverse: #1B91DA;
  --color-text-inverse-soft: #1B91DA;
}
```

### Switching Themes

To switch themes, use the `ThemeSwitcher` Context

```js
import React, { useContext } from "react"
import { ThemeContext } from 'gatsby-plugin-theme-switcher';

const { theme, switchTheme } = useContext(ThemeContext);
```

## Add A Theme Switcher Component

You can implement your own theme switcher component but here is a basic example:

```js
import React from "react";

const myThemes = [
    {
        id: "theme-midnightgreen",
        name: "Midnight Green",
    },
    {
        id: "theme-spacegray",
        name: "Space Gray",
    },
    {
        id: "theme-twitter",
        name: "Twitter Dark",
    }
]

const ThemePicker = ({ theme, setTheme }) => {
  return (
    <div>
      {myThemes.map((item, index) => {
          const nextTheme = myThemes.length -1 === index ? myThemes[0].id : myThemes[index+1].id;
        
           return item.id === theme ? (
            <div key={item.id} className={item.id}>
              <button
                aria-label={`Theme ${item.name}`}
                onClick={() => setTheme(nextTheme)}
              >
                {item.name}
              </button>
            </div>
          ) : null;
            }
        )}
    </div>
  );
};

export default ThemePicker;

```

## Advanced Usage

### Add your default theme options in `gatsby-config.js`.

```js
module.exports = {
  plugins: [
   {
      resolve: 'gatsby-plugin-theme-switcher',
      options: {
        defaultDarkTheme: 'theme-dark',
        defaultLightTheme: 'theme-light',
        themeStorageKey: 'my-key',
        minify: true,
      }
    }
  ],
};
```

## Parameters

| Option               | Description
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultDarkTheme`   | Initial theme name when prefers-color-scheme: dark                                                                                                          
| `defaultLightTheme`  | Initial theme name when preference cannot be determined                                                                                                  |
| `themeStorageKey`      | Key to persist the theme name in `localStorage`. Default = `"theme"`.                                                                                                                                                                                                                   |
| `minify` | Minify the injected script using Terser. Default = `true`.                                                                                                                                                                                                       |

## Credit

This plugin is based on the work and inspired by [Sam Larsen-Disney](https://sld.codes/) and [Josh Comeau](https://www.joshwcomeau.com/)


## LICENSE

[MIT][LICENSE] LICENSE

[package]: https://github.com/infoxicator/gatsby-plugin-theme-switcher
[gatsby]: https://www.gatsbyjs.org
[LICENSE]: https://github.com/infoxicator/gatsby-plugin-theme-switcher/blob/master/LICENSE.txt
