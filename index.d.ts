type IntegerArray = Uint8ClampedArray | Uint8Array | Uint16Array | Uint32Array

interface IntegerArrayOps {
  add<T extends IntegerArray> (lhs: T, rhs: T): T
  and<T extends IntegerArray> (lhs: T, rhs: T): T
  max<T extends IntegerArray> (lhs: T, rhs: T): T
  min<T extends IntegerArray> (lhs: T, rhs: T): T
  or<T extends IntegerArray> (lhs: T, rhs: T): T
  sub<T extends IntegerArray> (lhs: T, rhs: T): T
  xor<T extends IntegerArray> (lhs: T, rhs: T): T
}

declare const integerArrayOps: IntegerArrayOps

export = integerArrayOps
