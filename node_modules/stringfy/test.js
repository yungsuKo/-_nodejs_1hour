var stringfy = require('./index')
var assert = require("assert")
var should = require('should')

describe('Stringfy', () => {
  describe('camelCase', () => {

    it('should return camelCased string getElementById from -', () => {
      stringfy('get-element-by-id').camelCase().val().should.equal('getElementById')
    })
    it('should return camelCased string getElementById from _', () => {
      stringfy('get_element_by_id').camelCase().val().should.equal('getElementById')
    })
    it('should return camelCased string getElementById from both _ and -', () => {
      stringfy('get_element_by-id').camelCase().val().should.equal('getElementById')
    })

  })

  describe('reverse', () => {
    it('should return reversed string edcba', () => {
      stringfy('abcde').reverse().val().should.equal('edcba')
    })
  })

  describe('count', () => {
    it('should return the words count 2 of string hello', () => {
      stringfy('hello world').count().should.equal(2)
    })

    it('should return the words count 3 of CJK string', () => {
      stringfy('呆死ki').count().should.equal(3)
    })
  })

  describe('slug', () => {
    it('should return slugify string kong-cai-guan-ce', () => {
      stringfy('空彩观测').slug().val().should.equal('kong-cai-guan-ce')
    })
    it('should return slugify string te-me-go-to-hell', () => {
      stringfy('te me, go to hell').slug().val().should.equal('te-me-go-to-hell')
    })
  })
})
