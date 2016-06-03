'use strict'

var ops = require('./')
var assert = require('assert')

var signed = [
  Int8Array,
  Int16Array,
  Int32Array
]

var unsigned = [
  Uint8Array,
  Uint16Array,
  Uint32Array
]

signed.forEach(function (TypedArray) {
  var lhs = new TypedArray([4, 8, 16])
  var rhs = new TypedArray([1, 8, 31])

  assert.deepEqual(ops.add(lhs, rhs), new TypedArray([5, 16, 47]))
  assert.deepEqual(ops.sub(lhs, rhs), new TypedArray([3, 0, -15]))

  assert.deepEqual(ops.max(lhs, rhs), new TypedArray([4, 8, 31]))
  assert.deepEqual(ops.min(lhs, rhs), new TypedArray([1, 8, 16]))

  assert.deepEqual(ops.and(lhs, rhs), new TypedArray([0, 8, 16]))
  assert.deepEqual(ops.or(lhs, rhs), new TypedArray([5, 8, 31]))
  assert.deepEqual(ops.xor(lhs, rhs), new TypedArray([5, 0, 15]))
})

unsigned.forEach(function (TypedArray) {
  var lhs = new TypedArray([4, 8, 16])
  var rhs = new TypedArray([1, 8, 31])

  assert.deepEqual(ops.add(lhs, rhs), new TypedArray([5, 16, 47]))

  assert.deepEqual(ops.max(lhs, rhs), new TypedArray([4, 8, 31]))
  assert.deepEqual(ops.min(lhs, rhs), new TypedArray([1, 8, 16]))

  assert.deepEqual(ops.and(lhs, rhs), new TypedArray([0, 8, 16]))
  assert.deepEqual(ops.or(lhs, rhs), new TypedArray([5, 8, 31]))
  assert.deepEqual(ops.xor(lhs, rhs), new TypedArray([5, 0, 15]))
})

assert.throws(function () {
  ops.add(new Uint8Array(1), new Int8Array(1))
}, TypeError)

assert.throws(function () {
  ops.add(new Int8Array(1), new Int8Array(3))
}, RangeError)
