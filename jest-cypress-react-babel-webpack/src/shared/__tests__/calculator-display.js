import React from 'react'
import {render} from '@testing-library/react'
import {createSerializer} from 'jest-emotion'
import * as emotion from '@emotion/core'
import CalculatorDisplay from '../calculator-display'

expect.addSnapshotSerializer(createSerializer(emotion))

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchSnapshot()
})
