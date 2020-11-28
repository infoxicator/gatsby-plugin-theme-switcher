import React from "react";
import { ThemeProvider } from './theme-context'

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
    return (
      <ThemeProvider>
        {element}
      </ThemeProvider>
    )
}