# Integer Array Ops

Preform computations on arrays of integers.

## Installation

```sh
npm install --save integer-array-ops
```

## Usage

```js
const ops = require('integer-array-ops')

const lhs = new Int16Array([4, 8, 16])
const rhs = new Int16Array([1, 8, 31])

ops.add(lhs, rhs) // [5, 16, 47]
ops.sub(lhs, rhs) // [3, 0, -15]

ops.max(lhs, rhs) // [4, 8, 31]
ops.min(lhs, rhs) // [1, 8, 16]

ops.and(lhs, rhs) // [0, 8, 16]
ops.or(lhs, rhs)  // [5, 8, 31]
ops.xor(lhs, rhs) // [5, 0, 15]
```

## API

Each function takes two arrays of the same type and of the same length. They
return a new array of the same type as the input, with the resulting values.

Name | Operation
-----|-----
`add` | `+`
`sub` | `-`
`max` | `Math.max`
`min` | `Math.min`
`and` | `&`
`or` | `|`
`xor` | `^`
