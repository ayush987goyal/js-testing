import React from 'react'
import {render as renderRTL} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../src/themes'

function render(ui, options) {
  return renderRTL(<ThemeProvider theme={dark}>{ui}</ThemeProvider>, options)
}

export * from '@testing-library/react'
export {render}
