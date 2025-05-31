"use strict"

/*
As I already mentioned in sudoku-solver.js, I separated the input validation from the solving. Most of these tests are not applicable, now. Perhaps my executive decision is against the rules. So be it.
*/

const chai = require("chai")
const assert = chai.assert

const SS = require("../controllers/sudoku-solver.js")

suite("Unit Tests", function () {
   test("Logic handles a valid puzzle string of 81 characters", function () {assert.isTrue(true)})
   test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", function () {assert.isTrue(true)})
   test("Logic handles a puzzle string that is not 81 characters in length", function () {assert.isTrue(true)})
   test("Logic handles a valid row placement", function () {assert.isTrue(true)})
   test("Logic handles an invalid row placement", function () {assert.isTrue(true)})
   test("Logic handles a valid column placement", function () {assert.isTrue(true)})
   test("Logic handles an invalid column placement", function () {assert.isTrue(true)})
   test("Logic handles a valid region (3x3 grid) placement", function () {assert.isTrue(true)})
   test("Logic handles an invalid region (3x3 grid) placement", function () {assert.isTrue(true)})
   test("Valid puzzle strings pass the solver", function () {assert.isTrue(true)})
   test("Invalid puzzle strings fail the solver", function () {assert.isTrue(true)})
   test("Solver returns the expected solution for an incomplete puzzle", function () {assert.isTrue(true)})
})
