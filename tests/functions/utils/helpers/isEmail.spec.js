import isEmail from '@/utils/helpers/isEmail'

describe('isEmail', () => {
  it('deve retornar true para emails válidos', () => {
    expect(isEmail('teste@example.com')).toBe(true)
    expect(isEmail('user.name+tag+sorting@example.com')).toBe(true)
    expect(isEmail('user_name@example.co.uk')).toBe(true)
  })

  it('deve retornar false para emails inválidos', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail('plainaddress')).toBe(false)
    expect(isEmail('@missingusername.com')).toBe(false)
    expect(isEmail('username@.com')).toBe(false)
    expect(isEmail('username@com')).toBe(false)
    expect(isEmail('username@com.')).toBe(false)
    expect(isEmail('username@com..com')).toBe(false)
    expect(isEmail('username@-example.com')).toBe(false)
    expect(isEmail('username@example..com')).toBe(false)
  })
})
