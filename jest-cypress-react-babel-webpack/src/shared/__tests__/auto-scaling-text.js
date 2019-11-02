import React from 'react'
import {render} from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  const {container} = render(<AutoScalingText />)
  console.log(container.innerHTML)
})
