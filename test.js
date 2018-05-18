const solc = require('solc/wrapper');
const solcjson = require('./static/soljson.js');
const compiler = solc(solcjson);

var source = 'pragma solidity ^0.4.23; contract x { function g() public pure {} }';
var optimize = 1;
var result = compiler.compile(source, optimize);
console.log('SOLC:', result)
