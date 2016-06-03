'use strict'

function assertConstructor (lhs, rhs) {
  if (lhs.constructor !== rhs.constructor) {
    throw new TypeError('lhs and rhs must be of the same type')
  }
}

function assertLength (lhs, rhs) {
  if (lhs.length !== rhs.length) {
    throw new RangeError('lhs and rhs must be of the same length')
  }
}

exports.add = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = (lhs[i] + rhs[i])
  }

  return result
}

exports.and = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = (lhs[i] & rhs[i])
  }

  return result
}

exports.max = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = Math.max(lhs[i], rhs[i])
  }

  return result
}

exports.min = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = Math.min(lhs[i], rhs[i])
  }

  return result
}

exports.or = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = (lhs[i] | rhs[i])
  }

  return result
}

exports.sub = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = (lhs[i] - rhs[i])
  }

  return result
}

exports.xor = function (lhs, rhs) {
  assertConstructor(lhs, rhs)
  assertLength(lhs, rhs)

  var result = new lhs.constructor(lhs.length)

  for (var i = 0; i < lhs.length; ++i) {
    result[i] = (lhs[i] ^ rhs[i])
  }

  return result
}
