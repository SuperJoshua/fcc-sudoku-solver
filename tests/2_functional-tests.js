"use strict"

const chai = require("chai")
const chaiHttp = require("chai-http")
const assert = chai.assert
const server = require("../server")

chai.use(chaiHttp)

suite("Functional Tests", function () {

   suite("Testing /api/solve", function () {
"Solve a puzzle with valid puzzle string"
"Solve a puzzle with missing puzzle string"
"Solve a puzzle with invalid characters"
"Solve a puzzle with incorrect length"
"Solve a puzzle that cannot be solved"
   })

   suite("Testing /api/check", function () {
"Check a puzzle placement with all fields"
"Check a puzzle placement with single placement conflict"
"Check a puzzle placement with multiple placement conflicts"
"Check a puzzle placement with all placement conflicts"
"Check a puzzle placement with missing required fields"
"Check a puzzle placement with invalid characters"
"Check a puzzle placement with incorrect length"
"Check a puzzle placement with invalid placement coordinate"
"Check a puzzle placement with invalid placement value"
   })

})

