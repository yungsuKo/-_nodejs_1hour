'use strict'

const unidecode = require('unidecode')

class Stringfy {
  constructor (string) {
    this.string = string
  }
  trim () {
    this.string = this.string.trim()
    return this
  }
  camelCase () {
    let string = this.string
    for (let i in this.string) {
      i = parseInt(i)
      if (/^[_-]$/.test(string[i])) {
        string = string.substring(0, i+1) + string[i+1].toUpperCase() + string.substring(i+2)
      }
    }
    this.string = string.replace(/[_-]/g, '')
    return this
  }
  reverse () {
    this.string = this.string.split('').reverse().join('')
    return this
  }
  count () {
    return this.string.match(/[\u00ff-\uffff]|\S+/g).length
  }
  slug () {
    const seperator = '-'
    let string = this.string
    string = unidecode(string)
    string = string.replace(/[:\/\?#\[\]@!$&'()*+,;=\\%<>\|\^~£"]/g, '')
      // Replace dots and spaces with a sepeator
      .replace(/(\s|\.)/g, seperator)
      // Convert 2 or more sepeators into just one sepeator
      .replace(/-+/g, seperator)
      // Make the whole thing lowercase
      .toLowerCase()
    if(string.substring(string.length - 1) == seperator){
      string = string.substring(0, string.length - 1)
    }
    this.string = string
    return this
  }
  val () {
    return this.string
  }
}

function stringfy (string) {
  return new Stringfy(string)
}

module.exports = stringfy
