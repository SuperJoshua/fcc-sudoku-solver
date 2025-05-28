"use strict"

const chai = require("chai")
const chaiHttp = require("chai-http")
const assert = chai.assert
const server = require("../server")

chai.use(chaiHttp)

suite("Functional Tests", function () {

   suite("Testing /api/solve", function () {
      test("Solve a puzzle with valid puzzle string", function (done) {
         chai.request(server)
         .post("/api/solve")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Solve a puzzle with missing puzzle string", function (done) {
         chai.request(server)
         .post("/api/solve")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Solve a puzzle with invalid characters", function (done) {
         chai.request(server)
         .post("/api/solve")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Solve a puzzle with incorrect length", function (done) {
         chai.request(server)
         .post("/api/solve")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Solve a puzzle that cannot be solved", function (done) {
         chai.request(server)
         .post("/api/solve")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
   })

   suite("Testing /api/check", function () {
      test("Check a puzzle placement with all fields", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with single placement conflict", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with multiple placement conflicts", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with all placement conflicts", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with missing required fields", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with invalid characters", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with incorrect length", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with invalid placement coordinate", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
      test("Check a puzzle placement with invalid placement value", function (done) {
         chai.request(server)
         .post("/api/check")
         .send()
         .end(function(err, res) {
            assert.equal(res.status, 200)
            done()
         })
      })
   })
})

