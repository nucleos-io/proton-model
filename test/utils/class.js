'use strict'

const Model = require('../../index')

module.exports = class Test extends Model {

  schema() {
    return {
      name: {type: String}
    }
  }

  * getName() {
    return this.name
  }

  * beforeCreate(values, next) {
    console.log('before create', values)
    values.name = 'Luis el magnifico'
    next()
  }

  * afterCreate(record, next) {
    const name = yield record.getName()
    console.log('after create', name)
    next()
  }

  static * create(opts) {
    const test = new this({name: 'Luis Hernandez'})
    const result = yield test.save()
    return result
  }

  static * update(criteria, opts) {
    return yield Promise.resolve()
  }
}
