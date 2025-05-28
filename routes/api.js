"use strict"

const SS = require("../controllers/sudoku-solver.js")

module.exports = function (app) {
  app.route("/api/check")
    .post((req, res) => {
      let [row, coordinate] = ['', '']

      if (!(req.puzzle || req.coordinate || req.value)) {res.send({"error": "Required fields missing"})}

      else if (req.puzzle.match(/[^A-I1-9.]/)) {res.send({"error": "Invalid characters in puzzle"})}

      else if (req.puzzle.length != 81) {res.send({"error": "Expected puzzle to be 81 characters long"})}

      else if (req.value < 1 || req.value > 9) {res.send({"error": "Invalid value"})}

      else if (req.coordinate.length !== 2) {res.send({"error": "Invalid coordinate"})}

      else {
         [row, column] = req.coordinate.split()
         if (!row.match(/[A-I]/) || !column.match(/[1-9]/)) {res.send({"error": "Invalid coordinate"})}
         
         else {
            function update(v, c) {
               if (!v) {valid = v}
               if (c) {conflict.push(c)}
            }

            let [valid, conflict] = [true, []]
            let [v, c] = SS.validate(req.puzzle)
            update(v, c)
            [v, c] = SS.check_row(req.puzzle, row, column, req.value)
            update(v, c)
            [v, c] = SS.check_column(req.puzzle, row, column, req.value)
            update(v, c)
            [v, c] = SS.check_region(req.puzzle, row, column, req.value)
            update(v, c)

            if (valid) {res.send({valid})}
            
            else {res.send({valid, conflict})}
         }
      }
    })
    
  app.route("/api/solve")
    .post((req, res) => {
      if (!req.puzzle) {res.send({"error": "Required field missing"})}

      else if (req.puzzle.match(/[^0-9.]/)) {res.send({"error": "Invalid characters in puzzle"})}

      else if (req.puzzle.length != 81) {res.send({"error": "Expected puzzle to be 81 characters long"})}

      else {
         const solution = SS.solve(req.puzzle)
         if (solution) {res.send({solution})}

         else {res.send({"error": "Puzzle cannot be solved"})}
      }
    })
}
