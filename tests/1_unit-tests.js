"use strict"

const chai = require("chai")
const assert = chai.assert

const SS = require("../controllers/sudoku-solver.js")

suite("Unit Tests", function () {
   test("Logic handles a valid puzzle string of 81 characters", function () {})
   test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", function () {})
   test("Logic handles a puzzle string that is not 81 characters in length", function () {})
   test("Logic handles a valid row placement", function () {})
   test("Logic handles an invalid row placement", function () {})
   test("Logic handles a valid column placement", function () {})
   test("Logic handles an invalid column placement", function () {})
   test("Logic handles a valid region (3x3 grid) placement", function () {})
   test("Logic handles an invalid region (3x3 grid) placement", function () {})
   test("Valid puzzle strings pass the solver", function () {})
   test("Invalid puzzle strings fail the solver", function () {})
   test("Solver returns the expected solution for an incomplete puzzle", function () {})
})
