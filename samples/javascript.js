const constKey = 'const';
let letKey = 'let';

function f(x) { return x; }

const OBJ = {
  simpleProp: 0,
  'singleQuotedProp': 0,
  "doubleQuotedProp": 0,
  ['bracketedSingleQuotedProp']: 0,
  ["bracketedDoubleQuotedProp"]: 0,
  [constKey]: 0,
  [letKey]: 0,
  [letKey > 0 ? 'gt' : 'lt']: 0,
  [`the ${letKey} key`]: 0,
  ['ab' + 'cd']: 0,
  [f(0)]: 0,
  [f('foo')]: 0,
  method() { },
  get computedProp() { },
  set computedProp(value) { },
  [Symbol.toPrimitive]: 0,
  [Symbol.iterator]() { },
  nested: {
    simpleProp: 0,
    'singleQuotedProp': 0,
    "doubleQuotedProp": 0,
    ['bracketedSingleQuotedProp']: 0,
    ["bracketedDoubleQuotedProp"]: 0,
    [constKey]: 0,
    [letKey]: 0,
    [letKey > 0 ? 'gt' : 'lt']: 0,
    [`the ${letKey} key`]: 0,
    ['ab' + 'cd']: 0,
    [f(0)]: 0,
    [f('foo')]: 0,
    method() { },
    get computedProp() { },
    set computedProp(value) { },
    [Symbol.toPrimitive]: 0,
    [Symbol.iterator]() { },
  }
};
