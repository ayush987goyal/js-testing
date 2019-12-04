// Testing Pure Functions
import {isPasswordAllowed} from '../auth'

test('isPasswordAllowed returns true for valid passwords', () => {
  expect(isPasswordAllowed('!aBc123')).toBe(true)
})

test('isPasswordAllowed returns false for invalid passwords', () => {
  expect(isPasswordAllowed('a2c!')).toBe(false)
  expect(isPasswordAllowed('123@!2')).toBe(false)
  expect(isPasswordAllowed('aBce@!')).toBe(false)
  expect(isPasswordAllowed('abc123@')).toBe(false)
  expect(isPasswordAllowed('ABC123!')).toBe(false)
  expect(isPasswordAllowed('abcAv23')).toBe(false)
})
