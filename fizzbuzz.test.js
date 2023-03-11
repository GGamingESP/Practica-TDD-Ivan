import { expect } from 'chai'
import { describe, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('The provided parameter must be a number')
  if (Number.isNaN(number)) throw new Error('The provided parameter must be a number')
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'buzz'
  if (number % 3 === 0 & number % 5 === 0) return 'fizzbuzz'
  if (number % 7 === 0) return 'woof'
  return number
}

describe('fizzbuzz', () => {
  it('debería ser una funcion', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(() => fizzbuzz()).toThrow('The provided parameter must be a number')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(() => fizzbuzz()).toThrow('The provided parameter must be a number')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(() => fizzbuzz()).toThrow('The provided parameter must be a number')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })
  it('debería fallar si no es un númnero el parámetro proporcionado', () => {
    expect(fizzbuzz(7)).toBe('woof')
  })
})
